import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { SenseApi } from 'src/contexts/backend/services/senseApi';
import {
  SenseLinkResultMeta,
  SenseListItem,
  SenseTransactionResultMeta,
  SenseUnread,
} from 'src/services/backend/types/sense';
import { isParticle } from '../../particle/utils';
import { SenseItemId } from '../types/sense';
import { EntryType } from 'src/services/CozoDb/types/entities';
import {
  MsgMultiSendValue,
  MsgSendValue,
} from 'src/services/backend/services/dataSource/blockchain/types';
import { RootState } from 'src/redux/store';
import { numberToDateWithTimezone } from 'src/utils/date';

// similar to blockchain/tx/message type
export type SenseItem = {
  id: SenseItemId;
  transactionHash: string;

  // add normal type
  type: string;

  meta: SenseListItem['meta'];
  timestamp: string;
  memo: string | undefined;
  from: string;

  // for optimistic update
  status?: 'pending' | 'error';
};

type Chat = {
  id: SenseItemId;
  isLoading: boolean;
  error: string | undefined;
  data: SenseItem[];
  unreadCount: number;
};

type SliceState = {
  list: {
    isLoading: boolean;
    data: string[];
    error: string | undefined;
  };
  chats: {
    [key in SenseItemId]?: Chat;
  };
  summary: {
    unreadCount: {
      total: number;
      particles: number;
      neurons: number;
    };
  };
};

const initialState: SliceState = {
  list: {
    isLoading: false,
    data: [],
    error: undefined,
  },
  chats: {},
  summary: {
    unreadCount: {
      total: 0,
      particles: 0,
      neurons: 0,
    },
  },
};

function formatApiData(item: SenseListItem): SenseItem {
  if (item.entryType === EntryType.chat && item.meta.to) {
    item.entryType = EntryType.particle;
  }

  switch (item.entryType) {
    case EntryType.chat:
    case EntryType.transactions: {
      const meta = item.meta as SenseTransactionResultMeta;
      const { type } = meta;

      let from = item.ownerId;

      if (type === 'cosmos.bank.v1beta1.MsgSend') {
        const value = meta.value as MsgSendValue;
        from = value.from_address;
      } else if (type === 'cosmos.bank.v1beta1.MsgMultiSend') {
        const value = meta.value as MsgMultiSendValue;

        from = value.inputs[0].address;
      }

      return {
        id: item.id || from,
        timestamp: item.meta.timestamp,
        transactionHash:
          item.transactionHash || item.hash || item.meta.transaction_hash,
        type,
        from,
        meta: item.meta.value,
        memo: item.memo || meta.memo,

        // not good
        unreadCount: item.unreadCount || 0,
      };
    }

    case EntryType.particle: {
      const meta = item.meta as SenseLinkResultMeta;

      return {
        id: item.id || meta.neuron,
        timestamp: Date.parse(new Date(item.meta.timestamp)),
        transactionHash: meta.transactionHash || meta.transaction_hash,
        type: 'cyber.graph.v1beta1.MsgCyberlink',
        from: meta.neuron,
        meta: item.meta,
        memo: '',

        // not good
        unreadCount: item.unreadCount || 0,
      };
    }

    default:
      debugger;
      return {};
  }
}

const getSenseList = createAsyncThunk(
  'sense/getSenseList',
  async (senseApi: SenseApi) => {
    const data = await senseApi!.getList();
    return data.map(formatApiData);
  }
);

const getSenseChat = createAsyncThunk(
  'sense/getSenseChat',
  async ({ id, senseApi }: { id: SenseItemId; senseApi: SenseApi }) => {
    const particle = isParticle(id);

    if (particle) {
      return (await senseApi!.getLinks(id)).map((item) => {
        return formatApiData({
          ...item,
          entryType: EntryType.particle,
          meta: item,
        });
      });
    }

    return (await senseApi!.getFriendItems(id)).map((item) => {
      const entryType = item.to ? EntryType.particle : EntryType.chat;
      return formatApiData({
        ...item,
        entryType,
        meta: item,
      });
    });
  }
);

const markAsRead = createAsyncThunk(
  'sense/markAsRead',
  async ({ id, senseApi }: { id: SenseItemId; senseApi: SenseApi }) => {
    return senseApi!.markAsRead(id);
  }
);

const newChatStructure: Chat = {
  id: '',
  isLoading: false,
  data: [],
  error: undefined,
  unreadCount: 0,
};

const slice = createSlice({
  name: 'sense',
  initialState,
  reducers: {
    updateSenseList(state, action: PayloadAction<SenseListItem[]>) {
      const data = action.payload;

      const newList: SliceState['list']['data'] = [...state.list.data];

      data.forEach((item) => {
        const { id } = item;

        if (!state.chats[id]) {
          state.chats[id] = { ...newChatStructure };
        }

        // const descriptor = Object.getOwnPropertyDescriptor(chat, 'id');
        // if (!descriptor?.writable) {
        //   debugger;
        // }

        state.chats[id]!.id = id;
        state.chats[id]!.unreadCount = item.unreadCount;

        // TODO: check if message already exists
        state.chats[id]!.data = [...state.chats[id]!.data, formatApiData(item)];

        newList.push(id);
      });

      state.list.data = Array.from(new Set(newList));
    },

    addSenseItem(
      state,
      action: PayloadAction<{ id: SenseItemId; item: SenseItem }>
    ) {
      const { id, item } = action.payload;
      const chat = state.chats[id]!;

      chat.data.push({
        ...item,
        meta: item.meta,
        status: 'pending',
      });

      const newList = state.list.data.filter((item) => item !== id);
      newList.unshift(id);
      state.list.data = newList;
    },

    updateSenseItem(
      state,
      action: PayloadAction<{
        chatId: SenseItemId;
        txHash: string;
        isSuccess: boolean;
      }>
    ) {
      const { chatId, txHash, isSuccess } = action.payload;
      const chat = state.chats[chatId]!;

      const item = chat.data.find((item) => item.transactionHash === txHash);

      if (item) {
        if (isSuccess) {
          delete item.status;
        } else {
          item.status = 'error';
        }
      }
    },
    reset() {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getSenseList.pending, (state) => {
      state.list.isLoading = true;
    });

    builder.addCase(getSenseList.fulfilled, (state, action) => {
      state.list.isLoading = false;

      const newList: SliceState['list']['data'] = [];
      action.payload.forEach((item) => {
        const { id } = item;

        state.chats[id] = {
          id,
          isLoading: false,
          error: undefined,
          data: [item],
          unreadCount: item.unreadCount || 0,
        };

        newList.push(id);
      });

      state.list.data = newList;
    });
    builder.addCase(getSenseList.rejected, (state, action) => {
      console.error(action);

      state.list.isLoading = false;
      state.list.error = action.error.message;
    });

    builder.addCase(getSenseChat.pending, (state, action) => {
      state.chats[action.meta.arg.id]!.isLoading = true;
    });

    builder.addCase(getSenseChat.fulfilled, (state, action) => {
      const { id } = action.meta.arg;
      const chat = state.chats[id]!;
      chat.isLoading = false;

      chat.id = id;

      chat.data = action.payload;
    });
    builder.addCase(getSenseChat.rejected, (state, action) => {
      console.error(action);

      const chat = state.chats[action.meta.arg.id]!;
      chat.isLoading = false;
      chat.error = action.error.message;
    });

    // maybe add .pending, .rejected
    // can be optimistic
    builder.addCase(markAsRead.fulfilled, (state, action) => {
      const { id } = action.meta.arg;
      const chat = state.chats[id]!;

      const particle = isParticle(id);

      const { unreadCount } = chat;

      state.summary.unreadCount.total -= unreadCount;
      if (particle) {
        state.summary.unreadCount.particles -= unreadCount;
      } else {
        state.summary.unreadCount.neurons -= unreadCount;
      }

      chat.unreadCount = 0;
    });
  },
});

const selectUnreadCounts = createSelector(
  (state: RootState) => state.sense.chats,
  (chats) => {
    let unreadCountParticle = 0;
    let unreadCountNeuron = 0;

    Object.values(chats).forEach(({ id, unreadCount }) => {
      const particle = isParticle(id);

      if (particle) {
        unreadCountParticle += unreadCount;
      } else {
        unreadCountNeuron += unreadCount;
      }
    });

    const total = unreadCountParticle + unreadCountNeuron;

    return {
      total,
      particles: unreadCountParticle,
      neurons: unreadCountNeuron,
    };
  }
);

export const { addSenseItem, updateSenseItem, updateSenseList, reset } =
  slice.actions;

export { getSenseList, getSenseChat, markAsRead };

// selectors
export { selectUnreadCounts };

export default slice.reducer;

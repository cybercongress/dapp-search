import { EncodeObject } from '@cosmjs/proto-signing';
import { StdFee } from '@keplr-wallet/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ResolveType = (value: any) => void;
type RejectType = (reason?: any) => void;

type InitialState = {
  memo: string;
  fee?: number | 'auto' | StdFee;
  reject?: RejectType;
  resolve?: ResolveType;
  confirmation: boolean;
  messages?: EncodeObject[];
};
// FIXME: remove this logic after switching to redux-persist
let confirmation = false;
try {
  confirmation = JSON.parse(
    localStorage.getItem('cyb:confirmation') || 'false'
  );
} catch (error) {
  console.log('[Signer] failed to parse cyb:confirmation', error);
}

const initialState: InitialState = {
  memo: '',
  confirmation,
};

const signerSlice = createSlice({
  name: 'signer',
  initialState,
  reducers: {
    shareSignerPromise(
      state,
      { payload }: PayloadAction<{ resolve: ResolveType; reject: RejectType }>
    ) {
      state.resolve = payload.resolve;
      state.reject = payload.reject;
    },
    resetSignerState() {
      return { ...initialState };
    },
    updateMemo(state, { payload }: PayloadAction<string>) {
      state.memo = payload;
    },
    setFee(state, { payload }: PayloadAction<number | 'auto' | StdFee>) {
      state.fee = payload as any;
    },
    setConfirmation(state, { payload }: PayloadAction<boolean>) {
      state.confirmation = payload;
    },
    setMessages(state, { payload }: PayloadAction<EncodeObject[]>) {
      state.messages = payload;
    },
  },
});

export const {
  setFee,
  updateMemo,
  setMessages,
  setConfirmation,
  resetSignerState,
  shareSignerPromise,
} = signerSlice.actions;

export default signerSlice.reducer;

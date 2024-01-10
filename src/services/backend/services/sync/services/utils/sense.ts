import { updateSenseChat } from './sense';

import { TransactionDto } from 'src/services/CozoDb/types/dto';
import { SenseChat } from 'src/services/backend/types/sense';
import { NeuronAddress } from 'src/types/base';
import {
  MSG_SEND_TRANSACTION_TYPE,
  MSG_MULTI_SEND_TRANSACTION_TYPE,
  MsgSendTransaction,
} from '../../../dataSource/blockchain/types';
import { Coin } from 'cosmjs-types/cosmos/base/v1beta1/coin';

// eslint-disable-next-line import/no-unused-modules
export const extractSenseChats = (
  myAddress: NeuronAddress,
  transactions: TransactionDto[]
) => {
  const sendTransactions =
    transactions!.filter(
      (t) =>
        t.type === MSG_SEND_TRANSACTION_TYPE ||
        t.type === MSG_MULTI_SEND_TRANSACTION_TYPE
    ) || [];

  if (sendTransactions.length === 0) {
    return [];
  }
  const chats = new Map<NeuronAddress, SenseChat>();
  transactions.forEach((t) => {
    let userAddress = '';
    if (t.type === MSG_MULTI_SEND_TRANSACTION_TYPE) {
      // TODO: How to deal many outputs vs many inputs??
      const { inputs, outputs } = t.value;
      const userMessages = inputs.find((i) => i.address === myAddress)
        ? outputs
        : inputs;
      userMessages.forEach((msg) =>
        updateSenseChat(chats, msg.address, t, msg.coins)
      );
    } else if (t.type === MSG_SEND_TRANSACTION_TYPE) {
      const { from_address, to_address, amount } =
        t.value as MsgSendTransaction['value'];
      userAddress = from_address === myAddress ? to_address : from_address;
      updateSenseChat(chats, userAddress, t, amount);
    }
  });

  return chats;
};

const updateSenseChat = (
  chats: Map<NeuronAddress, SenseChat>,
  addr: string,
  t: TransactionDto,
  amount: Coin[]
): Map<string, SenseChat> => {
  const transactions = chats.has(addr)
    ? chats.get(addr)?.transactions || []
    : [];

  transactions.push(t);
  chats.set(addr, {
    userAddress: addr,
    last: { amount, memo: t.memo },
    transactions,
  });
  return chats;
};

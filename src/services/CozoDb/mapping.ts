import { LsResult } from 'ipfs-core-types/src/pin';
import { IPFSContent } from 'src/utils/ipfs/ipfs';

import {
  PinTypeMap,
  EntryType,
  TransactionDbEntry,
  SyncStatusDbEntry,
} from './types';
import { NeuronAddress, ParticleCid } from 'src/types/base';
import { dateToNumber } from 'src/utils/date';
import { Transaction } from '../backend/workers/background/services/blockchain/types';

export const mapParticleToEntity = (particle: IPFSContent): any => {
  const { cid, result, meta, textPreview } = particle;
  const { size, mime, type, blocks, sizeLocal } = meta;
  // hack to fix string command
  const text = textPreview?.replace(/"/g, "'") || '';
  return {
    cid,
    size: size || 0,
    mime: mime || 'unknown',
    type,
    text,
    size_local: sizeLocal || -1,
    blocks: blocks || 0,
  };
};

//TODO: REFACTOR
export const mapPinToEntity = (pin: LsResult) => ({
  cid: pin.cid.toString(),
  type: PinTypeMap[pin.type],
});

export const mapTransactionToEntity = (
  neuron: string,
  tx: Transaction
): TransactionDbEntry => {
  const {
    transaction_hash,
    transaction: {
      block: { timestamp },
      success,
    },
    type,
    value,
  } = tx;
  return {
    hash: transaction_hash,
    type,
    timestamp: dateToNumber(timestamp),
    // value: JSON.stringify(value),
    value,
    success,
    neuron,
  };
};

export const mapSyncStatusToEntity = (
  id: NeuronAddress | ParticleCid,
  entryType: EntryType,
  unreadCount: int,
  timestampUpdate: number,
  timestampRead: number = timestampUpdate
): SyncStatusDbEntry => {
  return {
    entry_type: entryType,
    id,
    timestamp_update: timestampUpdate,
    timestamp_read: timestampRead,
    unread_count: unreadCount,
    disabled: false,
  };
};

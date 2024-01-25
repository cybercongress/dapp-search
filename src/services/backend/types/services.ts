import { IndexedDbWriteMessage } from '../../CozoDb/types/types';
import { SenseListItem } from './sense';

export type SyncEntryName =
  | 'pin'
  | 'particle'
  | 'transaction'
  | 'resolver'
  | 'tweets';

export type ProgressTracking = {
  totalCount: number;
  completeCount: number;
  estimatedTime: number;
};

export type SyncProgress = Partial<{
  status: 'idle' | 'in-progress' | 'error';
  progress: ProgressTracking;

  done: boolean;
  error: string;
  message: string;
}>;

export type ServiceStatus = 'inactive' | 'starting' | 'started' | 'error';

export type SyncEntryStatus = Partial<Record<SyncEntryName, SyncProgress>>;

export type SyncState = {
  status: ServiceStatus;
  entryStatus: SyncEntryStatus;
  lastError?: string;
};

export type SyncStatusMessage = {
  type: 'sync_status';
  value: Omit<SyncState, 'entryStatus'>;
};

export type SyncEntryMessage = {
  type: 'sync_entry';
  value: {
    entry: SyncEntryName;
    state: SyncProgress;
  };
};

export type ServiceName = 'db' | 'ipfs' | 'sync';

export type ServiceStatusMessage = {
  type: 'service_status';
  value: { name: ServiceName; status: ServiceStatus; message?: string };
};

export type SenseListRemove = {
  type: 'sense_list_remove';
  list: SenseListItem[];
};

export type SenseListUpdate = {
  type: 'sense_list_update';
  list: SenseListItem[];
};

export type BroadcastChannelMessage =
  | SyncStatusMessage
  | SyncEntryMessage
  | IndexedDbWriteMessage
  | ServiceStatusMessage
  | SenseListUpdate
  | SenseListRemove;

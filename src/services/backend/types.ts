export type SyncEntry = 'pin' | 'particle' | 'transaction';

export type SyncProgress = {
  progress?: number;
  done?: boolean;
  error?: string;
  message?: string;
};

export type WorkerStatus = 'inactive' | 'idle' | 'syncing' | 'error';

export type ServiceStatus = 'inactive' | 'starting' | 'started' | 'error';

export type SyncBroadcastType = 'sender' | 'reciever';

export type SyncEntryStatus = Partial<Record<SyncEntry, SyncProgress>>;

export type WorkerState = {
  status: WorkerStatus;
  entryStatus: SyncEntryStatus;
  lastError?: string;
};

export type WorkerStatusUpdate = Omit<WorkerState, 'entryStatus'>;

export type SyncEntryUpdate = {
  entry: SyncEntry;
  state: SyncProgress;
};

export type WorkerStatusMessage = {
  type: 'worker_status';
  value: WorkerStatusUpdate;
};

export type SyncEntryMessage = {
  type: 'sync_entry';
  value: SyncEntryUpdate;
};

export type ServiceName = 'db' | 'ipfs' | 'sync';

export type ServiceStatusMessage = {
  type: 'service_status';
  value: { name: ServiceName; status: ServiceStatus; error?: string };
};

export type onProgressEvent = (entry: SyncEntry, state: SyncProgress) => void;

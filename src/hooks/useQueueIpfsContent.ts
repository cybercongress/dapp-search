import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import {
  QueueItemAsyncResult,
  QueueItemOptions,
  QueueItemStatus,
} from 'src/services/QueueManager/types';

import {
  FetchWithDetailsFunc,
  IPFSContentMaybe,
  IpfsContentSource,
} from 'src/services/ipfs/ipfs';
import { useBackend } from 'src/contexts/backend';
import { proxy } from 'comlink';

type UseIpfsContentReturn = {
  isReady: boolean;
  status?: QueueItemStatus;
  source?: IpfsContentSource;
  content: IPFSContentMaybe;
  clear?: () => Promise<void>;
  cancel?: (cid: string) => Promise<void>;
  fetchParticle?: (cid: string, rank?: number) => Promise<void>;
  fetchParticleAsync?: (
    cid: string
  ) => Promise<QueueItemAsyncResult<IPFSContentMaybe> | undefined>;
  fetchWithDetails?: FetchWithDetailsFunc;
};

function useQueueIpfsContent(parentId?: string): UseIpfsContentReturn {
  const [status, setStatus] = useState<QueueItemStatus>();
  const [source, setSource] = useState<IpfsContentSource | undefined>();
  const [content, setContent] = useState<IPFSContentMaybe>();
  const prevParentIdRef = useRef<string | undefined>();

  const {
    // backgroundWorker: backendApi,
    ipfsNode,
    ipfsApi,
  } = useBackend();

  const fetchParticle = useCallback(
    async (cid: string, rank?: number) => {
      setContent(undefined);
      setStatus('pending');
      setSource(undefined);

      const callback = (
        cid: string,
        status: QueueItemStatus,
        source: IpfsContentSource,
        result: IPFSContentMaybe
      ) => {
        setStatus(status);
        setSource(source);
        if (status === 'completed') {
          (async () => Promise.resolve(result).then(setContent))();
        }
      };
      await ipfsApi?.enqueue(cid, proxy(callback), {
        parent: parentId,
        priority: rank || 0,
        viewPortPriority: 0,
      });
    },
    [parentId, ipfsApi]
  );

  const fetchParticleAsync = useCallback(
    async (cid: string, options?: QueueItemOptions) =>
      ipfsApi?.enqueueAndWait(cid, options),
    [ipfsApi]
  );

  useEffect(() => {
    if (prevParentIdRef.current !== parentId) {
      if (prevParentIdRef.current) {
        ipfsApi.dequeueByParent(prevParentIdRef.current);
      }
      prevParentIdRef.current = parentId;
    }
  }, [parentId, ipfsApi]);

  return {
    isReady: !!ipfsApi,
    status,
    source,
    content,
    cancel: ipfsApi ? (cid: string) => ipfsApi.dequeue(cid) : undefined,
    clear: ipfsApi ? async () => ipfsApi.clearQueue() : undefined,
    fetchParticle: ipfsApi ? fetchParticle : undefined,
    fetchParticleAsync: ipfsApi ? fetchParticleAsync : undefined,
    fetchWithDetails: ipfsNode ? ipfsNode.fetchWithDetails : undefined,
  };
}

export default useQueueIpfsContent;

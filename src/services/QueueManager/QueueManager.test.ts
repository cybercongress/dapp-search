import QueueManager from './QueueManager';
import { QueueStrategy } from './QueueStrategy';

import { fetchIpfsContent } from 'src/utils/ipfs/utils-ipfs';

jest.mock('src/utils/ipfs/utils-ipfs', () => ({
  fetchIpfsContent: jest.fn(),
}));

function* statusesExpected(resultStatuses: string[]): Generator<string> {
  yield 'executing';
  for (let i = 0; i < resultStatuses.length; i++) {
    yield resultStatuses[i];
  }
}

function* valuesExpected(values: string[]): Generator<string> {
  for (let i = 0; i < values.length; i++) {
    yield values[i];
  }
}

function wrapPromiseWithSignal(
  promise: Promise<string>,
  signal?: AbortSignal
): Promise<string> {
  return new Promise((resolve, reject) => {
    promise.then((result) => {
      resolve(result);
    });

    signal?.addEventListener('abort', (e) => {
      // @ts-ignore
      if (e?.target?.reason !== 'timeout') {
        reject(new DOMException('canceled', 'AbortError'));
      }
    });
  });
}

const getPromise = (
  result = 'result',
  timeout = 500,
  signal?: AbortSignal
): Promise<string> =>
  wrapPromiseWithSignal(
    new Promise<string>((resolve) => {
      setTimeout(() => resolve(`result ${result}`), timeout);
    }),
    signal
  );

describe('QueueManager', () => {
  let queueManager: QueueManager<string>;
  const strategy = new QueueStrategy(
    {
      db: { timeout: 300, maxConcurrentExecutions: 2 },
      node: { timeout: 300, maxConcurrentExecutions: 2 },
      gateway: { timeout: 300, maxConcurrentExecutions: 2 },
    },
    ['db', 'node', 'gateway']
  );

  beforeEach(() => {
    queueManager = new QueueManager<string>(strategy);
  });

  it('should keep in pending items thats is out of maxConcurrentExecutions', () => {
    (fetchIpfsContent as jest.Mock).mockImplementation(() => getPromise());
    queueManager.enqueue('1', jest.fn);
    queueManager.enqueue('2', jest.fn);
    queueManager.enqueue('3', jest.fn);
    expect(queueManager.getQueue()[0].status).toEqual('executing');
    expect(queueManager.getQueue()[1].status).toEqual('executing');
    expect(queueManager.getQueue()[2].status).toEqual('pending');
  });

  it('should handle timeout and switch to next source', (done) => {
    const statuses = statusesExpected(['timeout', 'executing']);
    const itemId = 'xxx';

    (fetchIpfsContent as jest.Mock).mockImplementation(
      (cid: string, source: string, { controller }) =>
        getPromise('result', 50000, controller.signal)
    );

    queueManager.enqueue(itemId, (cid, status) => {
      expect(cid).toBe(itemId);
      expect(status).toBe(statuses.next().value);
    });

    setTimeout(() => {
      const queue = queueManager.getQueue();
      const nextItem = queue[0];
      expect(nextItem.status).toEqual('executing');
      expect(nextItem.source).toEqual('node');
      expect(queue.length).toBe(1);
      done();
    }, 500);
  });

  it('should cancel queue items', (done) => {
    const statuses = statusesExpected(['cancelled']);

    const itemId = '1';
    (fetchIpfsContent as jest.Mock).mockImplementation(
      (cid: string, source: string, { controller }) =>
        wrapPromiseWithSignal(getPromise('result', 1000), controller.signal)
    );
    queueManager.enqueue(itemId, (cid, status) => {
      expect(cid).toBe(itemId);
      expect(status).toBe(statuses.next().value);
      if (status === 'cancelled') {
        expect(queueManager.getQueue()[0]?.controller?.signal.aborted).toBe(
          true
        );
      }
    });

    queueManager.cancel(itemId);

    setTimeout(() => {
      expect(queueManager.getQueue().length).toEqual(0);
      done();
    }, 100);
  });

  it('should handle execution errors and switch next', () => {
    const statuses = statusesExpected([
      'error',
      'executing',
      'error',
      'executing',
      'error',
    ]);
    const itemId = '1';
    (fetchIpfsContent as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error('some error'))
    );
    const sources = valuesExpected(['db', 'node', 'gateway']);

    queueManager.enqueue(itemId, (cid, status, source): void => {
      expect(cid).toBe(itemId);
      expect(status).toBe(statuses.next().value);
      expect(source).toBe(sources.next().value);
    });

    setTimeout(() => {
      const queue = queueManager.getQueue();
      expect(queue.length).toBe(0);
    }, 0);
  });

  it('should execute queue items in order by priority', () => {
    (fetchIpfsContent as jest.Mock).mockImplementation(() =>
      getPromise('x', 100)
    );
    queueManager.enqueue('1', jest.fn);
    queueManager.enqueue('2', jest.fn);

    const executingByPriority: string[] = [];
    queueManager.enqueue('3', (cid) => executingByPriority.push(cid), {
      priority: 1,
    });

    queueManager.enqueue('4', (cid) => executingByPriority.push(cid), {
      priority: 10,
    });

    const queue = queueManager.getQueue();
    expect(queue.length).toBe(4);
    expect(queue[0].status).toBe('executing');
    expect(queue[1].status).toBe('executing');
    expect(queue[2].status).toBe('pending');
    expect(queue[3].status).toBe('pending');

    setTimeout(() => {
      const queue = queueManager.getQueue();
      expect(queue.length).toBe(0);

      expect(executingByPriority[0]).toBe('4');
      expect(executingByPriority[1]).toBe('3');
    }, 150);
  });
});

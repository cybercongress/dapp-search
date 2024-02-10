/* eslint-disable import/no-unused-modules */
import { GraphQLClient, request } from 'graphql-request';

import gql from 'graphql-tag';
import { Cyberlink, ParticleCid, NeuronAddress } from 'src/types/base';
import { dateToNumber, numberToDate } from 'src/utils/date';
import { Transaction } from './types';

import { TRANSACTIONS_BATCH_LIMIT, CYBERLINKS_BATCH_LIMIT } from './consts';
import { fetchIterable } from './utils/fetch';
import { CYBER_INDEX_HTTPS } from 'src/constants/config';

type OrderDirection = 'desc' | 'asc';

type TransactionsByAddressResponse = {
  messages_by_address: Transaction[];
};

type CyberlinksCountResponse = {
  cyberlinks_aggregate: {
    aggregate: {
      count: number;
    };
  };
};

type MessagesCountResponse = {
  messages_by_address_aggregate: {
    aggregate: {
      count: number;
    };
  };
};

type CyberlinksSyncStatsResponse = {
  cyberlinks_aggregate: {
    aggregate: {
      count: number;
    };
  };
  first: {
    timestamp: string;
  }[];
  last: {
    timestamp: string;
    to: ParticleCid;
    from: ParticleCid;
  }[];
};

export type CyberlinksByParticleResponse = {
  cyberlinks: (Omit<Cyberlink, 'timestamp'> & {
    timestamp: string;
    neuron: NeuronAddress;
    transaction_hash: string;
  })[];
};

const messagesByAddress = gql(`
query MyQuery($address: _text, $limit: bigint, $offset: bigint, $timestamp_from: timestamp, $types: _text, $order_direction: order_by) {
  messages_by_address(
    args: {addresses: $address, limit: $limit, offset: $offset, types: $types},
    order_by: {transaction: {block: {timestamp: $order_direction}}},
    where: {transaction: {block: {timestamp: {_gt: $timestamp_from}}}}
    ) {
    transaction_hash
    index
    value
    transaction {
      success
      block {
        timestamp,
        height
      }
      memo
    }
    type
  }
}
`);

const cyberlinksByParticle = gql(`
query Cyberlinks($limit: Int, $offset: Int, $orderBy: [cyberlinks_order_by!], $where: cyberlinks_bool_exp) {
  cyberlinks(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
    from: particle_from
    to: particle_to
    timestamp
    neuron
    transaction_hash
  }
}
`);

const cyberlinksSyncStats = gql(`
  query Cyberlinks($where: cyberlinks_bool_exp) {
    cyberlinks_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    first: cyberlinks(limit: 1, order_by: { timestamp: asc }, where: $where) {
      timestamp
    }
    last: cyberlinks(limit: 1, order_by: { timestamp: desc }, where: $where) {
      timestamp,
      to: particle_to,
      from: particle_from
    }
  }
`);

const cyberlinksCountByNeuron = gql(`
  query MyQuery($address: String, $particles_from: [String!], $timestamp: timestamp) {
    cyberlinks_aggregate(where: {
        _and: [
          { neuron: {_eq: $address}},
          { particle_from: {_in: $particles_from}},
          { timestamp: {_gt: $timestamp}}
        ]
      }) {
      aggregate {
        count
      }
    }
  }
  `);

const transactionsCountByNeuron = gql(`
  query MyQuery($address: _text, $timestamp: timestamp) {
    messages_by_address_aggregate(
      args: {addresses: $address, limit: "100000000", offset: "0", types: "{}"},
      where: {transaction: {block: {timestamp: {_gt: $timestamp}}}}) {
        aggregate {
          count
        }
      }
  }
  `);

const createIndexerClient = (abortSignal?: AbortSignal) =>
  new GraphQLClient(CYBER_INDEX_HTTPS, {
    signal: abortSignal,
  });

const fetchTransactions = async ({
  neuron,
  timestampFrom,
  offset = 0,
  types = [],
  orderDirection = 'desc',
  batchSize,
  abortSignal,
}: {
  neuron: NeuronAddress;
  timestampFrom: number;
  offset: number;
  types: Transaction['type'][];
  orderDirection: OrderDirection;
  batchSize: number;
  abortSignal?: AbortSignal;
}) => {
  const res = await createIndexerClient(
    abortSignal
  ).request<TransactionsByAddressResponse>(messagesByAddress, {
    address: `{${neuron}}`,
    limit: batchSize,
    timestamp_from: numberToDate(timestampFrom),
    offset,
    types: `{${types.map((t) => `"${t}"`).join(' ,')}}`,
    order_direction: orderDirection,
  });

  return res?.messages_by_address;
};

const fetchCyberlinks = async ({
  particleCid,
  timestampFrom,
  offset = 0,
  abortSignal,
}: {
  particleCid: ParticleCid;
  timestampFrom: number;
  offset?: number;
  abortSignal?: AbortSignal;
}) => {
  const res = await await createIndexerClient(
    abortSignal
  ).request<CyberlinksByParticleResponse>(cyberlinksByParticle, {
    limit: CYBERLINKS_BATCH_LIMIT,
    offset,
    orderBy: [
      {
        timestamp: 'desc',
      },
    ],
    where: {
      _or: [
        {
          particle_to: {
            _eq: particleCid,
          },
        },
        {
          particle_from: {
            _eq: particleCid,
          },
        },
      ],
      timestamp: {
        _gt: numberToDate(timestampFrom),
      },
    },
  });
  return res.cyberlinks;
};

const fetchCyberlinksByNeroun = async ({
  neuron,
  particlesFrom,
  timestampFrom,
  batchSize,
  offset = 0,
  abortSignal,
}: {
  neuron: NeuronAddress;
  particlesFrom: ParticleCid[];
  timestampFrom: number;
  batchSize: number;
  offset?: number;
  abortSignal?: AbortSignal;
}) => {
  const where = {
    _and: [
      {
        timestamp: {
          _gt: numberToDate(timestampFrom),
        },
      },
      {
        neuron: {
          _eq: neuron,
        },
      },
      { particle_from: { _in: particlesFrom } },
    ],
  };

  const res = await createIndexerClient(
    abortSignal
  ).request<CyberlinksByParticleResponse>(cyberlinksByParticle, {
    limit: batchSize,
    offset,
    orderBy: [
      {
        timestamp: 'asc',
      },
    ],
    where,
  });

  return res.cyberlinks;
};

export const fetchCyberlinksByNerounIterable = async (
  neuron: NeuronAddress,
  particlesFrom: ParticleCid[],
  timestampFrom: number,
  batchSize: number,
  abortSignal?: AbortSignal
) =>
  fetchIterable(fetchCyberlinksByNeroun, {
    neuron,
    particlesFrom,
    timestampFrom,
    batchSize,
    abortSignal,
  });

const fetchTransactionsIterable = (
  neuron: NeuronAddress,
  timestampFrom: number,
  types: Transaction['type'][] = [],
  orderDirection: OrderDirection,
  batchSize: number,
  abortSignal?: AbortSignal
) =>
  fetchIterable(fetchTransactions, {
    neuron,
    timestampFrom,
    types,
    orderDirection,
    batchSize,
    abortSignal,
  });

const fetchCyberlinksIterable = (
  particleCid: ParticleCid,
  timestampFrom: number,
  abortSignal?: AbortSignal
) =>
  fetchIterable(fetchCyberlinks, { particleCid, timestampFrom, abortSignal });

const fetchCyberlinksCount = async (
  address: NeuronAddress,
  particlesFrom: ParticleCid[],
  timestampFrom: number,
  abortSignal?: AbortSignal
) => {
  try {
    const res = await createIndexerClient(
      abortSignal
    ).request<CyberlinksCountResponse>(cyberlinksCountByNeuron, {
      address,
      particles_from: particlesFrom,
      timestamp: numberToDate(timestampFrom),
    });

    return res?.cyberlinks_aggregate.aggregate.count;
  } catch (e) {
    console.log('--- fetchLinksCount:', e);
    return -1;
  }
};

const fetchTransactionMessagesCount = async (
  address: NeuronAddress,
  timestampFrom: number,
  abortSignal: AbortSignal
) => {
  try {
    const res = await createIndexerClient(
      abortSignal
    ).request<MessagesCountResponse>(transactionsCountByNeuron, {
      address: `{${address}}`,
      timestamp: numberToDate(timestampFrom),
    });

    return res?.messages_by_address_aggregate.aggregate.count;
  } catch (e) {
    console.log('--- fetchTransactionMessagesCount:', e);
    return -1;
  }
};

const fetchCyberlinkSyncStats = async (
  particleCid: ParticleCid,
  timestampFrom: number
) => {
  const res = await request<CyberlinksSyncStatsResponse>(
    CYBER_INDEX_HTTPS,
    cyberlinksSyncStats,
    {
      where: {
        _or: [
          {
            particle_to: {
              _eq: particleCid,
            },
          },
          {
            particle_from: {
              _eq: particleCid,
            },
          },
        ],
        timestamp: {
          _gt: numberToDate(timestampFrom),
        },
      },
    }
  );

  const {
    first,
    last,
    cyberlinks_aggregate: {
      aggregate: { count },
    },
  } = res;
  const lastCyberlink = last[0];
  if (!lastCyberlink) {
    return undefined;
  }

  const isFrom = lastCyberlink?.from === particleCid;
  const lastLinkedParticle =
    lastCyberlink &&
    (lastCyberlink.from === particleCid
      ? lastCyberlink.to
      : lastCyberlink.from);

  return {
    firstTimestamp: first.length > 0 ? dateToNumber(first[0].timestamp) : 0,
    lastTimestamp: lastCyberlink ? dateToNumber(lastCyberlink.timestamp) : 0,
    lastLinkedParticle,
    isFrom,
    count,
  };
};

export {
  fetchTransactionsIterable,
  fetchCyberlinksIterable,
  fetchCyberlinksCount,
  fetchTransactionMessagesCount,
};

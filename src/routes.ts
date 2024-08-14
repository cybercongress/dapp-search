// eslint-disable-next-line import/prefer-default-export
export const routes = {
  home: {
    path: '/',
  },
  temple: {
    path: '/temple',
  },
  senateProposal: {
    path: '/senate/:proposalId/*',
    getLink: (proposalId: number) => `/senate/${proposalId}`,
  },
  sphere: {
    path: '/sphere',
  },
  sphereJailed: {
    path: '/sphere/jailed',
  },
  hfr: {
    path: '/hfr',
  },
  gift: {
    path: '/gift',
  },
  ipfs: {
    path: '/ipfs',
    getLink: (param: string) => `/ipfs/${param}`,
  },
  citizenship: {
    path: '/citizenship',
  },
  robot: {
    path: '/robot',
    routes: {
      // TODO: reuse parent
      karma: {
        path: '/robot/karma',
      },
      drive: {
        path: '/robot/drive',
      },
      sense: {
        path: '/robot/sense',
      },
      energy: {
        path: '/robot/energy',
      },
      brain: {
        path: '/robot/brain',
      },
      soul: {
        path: '/robot/soul',
      },
    },
  },
  robotPassport: {
    path: '/:username',
    getLink: (username: string) => `/@${username}`,
  },
  portal: {
    path: '/portal',
    routes: {
      map: {
        path: '/portal/map',
      },
    },
  },
  search: {
    path: '/search',
    getLink: (search: string) => `/oracle/ask/${search}`,
  },
  teleport: {
    path: '/teleport',
    send: {
      path: '/teleport/send',
    },
    bridge: {
      path: '/teleport/bridge',
    },
    swap: {
      path: '/teleport/swap',
    },
  },
  keys: {
    path: '/settings/keys',
  },
  sigma: {
    path: '/sigma',
  },
  neuron: {
    path: '/neuron/:address/*',
    getLink: (address: string) => `/neuron/${address}`,
  },
  oracle: {
    path: '/',
    learn: {
      path: '/oracle/learn',
    },
    ask: {
      path: '/oracle/ask/:query',
      getLink: (query: string) => `/oracle/ask/${query}`,
    },
  },
  social: {
    path: '/social',
  },
  brain: {
    path: '/brain',
  },
  txExplorer: {
    path: '/tx/:hash',
    getLink: (hash: string) => `/network/bostrom/tx/${hash}`,
  },
  contracts: {
    path: '/contracts',
    byAddress: {
      path: '/contracts/:contractAddress',
      getLink: (contractAddress: string) => `/contracts/${contractAddress}`,
    },
  },
  blocks: {
    path: '/blocks',
    getLink: () => `/network/bostrom/blocks`,
    idBlock: {
      path: '/blocks/:idBlock',
      getLink: (idBlock: string) => `/network/bostrom/blocks/${idBlock}`,
    },
  },
  settings: {
    path: '/settings',
  },
};

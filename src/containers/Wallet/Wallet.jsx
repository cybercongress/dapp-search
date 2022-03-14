/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import { Pane, Text, Tooltip, Icon } from '@cybercongress/gravity';
import TransportU2F from '@ledgerhq/hw-transport-u2f';
import Web3Utils from 'web3-utils';
import { Link } from 'react-router-dom';

import { check } from 'prettier';
import { Loading, ConnectLadger, Copy, LinkWindow } from '../../components';
import NotFound from '../application/notFound';
import ActionBarContainer from './actionBarContainer';
import { setBandwidth } from '../../redux/actions/bandwidth';
import { setDefaultAccount, setAccounts } from '../../redux/actions/pocket';
import withWeb3 from '../../components/web3/withWeb3';
import injectKeplr from './injectKeplr';

import { LEDGER, COSMOS, PATTERN_CYBER } from '../../utils/config';
import {
  getBalance,
  getTotalEUL,
  getImportLink,
  getAccountBandwidth,
  getGraphQLQuery,
} from '../../utils/search/utils';
import { formatCurrency } from '../../utils/utils';
import { PocketCard } from './components';
import {
  PubkeyCard,
  GolCard,
  ImportLinkLedger,
  GolBalance,
  TweetCard,
  IpfsCard,
} from './card';
import ActionBarConnect from './actionBarConnect';
import ActionBar from './actionBar';
import { AppContext } from '../../context';

import db from '../../db';

const {
  HDPATH,
  LEDGER_OK,
  LEDGER_NOAPP,
  STAGE_INIT,
  STAGE_LEDGER_INIT,
  STAGE_READY,
  STAGE_ERROR,
  LEDGER_VERSION_REQ,
} = LEDGER;

const QueryAddress = (address) =>
  `
  query MyQuery {
    cyberlink(where: {subject: {_eq: "${address}"}}) {
      object_from
      object_to
    }
  }`;

function flatten(data, outputArray) {
  data.forEach((element) => {
    if (Array.isArray(element)) {
      flatten(element, outputArray);
    } else {
      outputArray.push(element);
    }
  });
}

const comparer = (otherArray) => {
  return (current) => {
    return (
      otherArray.filter((other) => {
        return (
          other.object_from === current.from && other.object_to === current.to
        );
      }).length === 0
    );
  };
};

const groupLink = (linkArr) => {
  const link = [];
  const size = 7;
  for (let i = 0; i < Math.ceil(linkArr.length / size); i += 1) {
    link[i] = linkArr.slice(i * size, i * size + size);
  }
  return link;
};

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: STAGE_INIT,
      pocket: [],
      refreshTweet: 0,
      accountKeplr: null,
      returnCode: null,
      ledgerVersion: [0, 0, 0],
      selectAccount: null,
      defaultAccounts: null,
      defaultAccountsKeys: null,
      addAddress: false,
      loading: true,
      accounts: null,
      accountsETH: null,
      link: null,
      selectedIndex: '',
      importLinkCli: false,
      linkSelected: null,
      selectCard: '',
      hoverCard: '',
      updateCard: 0,
      storageManager: null,
      balanceEthAccount: {
        eth: 0,
        gol: 0,
      },
    };
  }

  async componentDidMount() {
    const { accountKeplr, accounts, web3 } = this.props;

    await this.setState({
      accountsETH: accounts,
    });

    if (accountKeplr && accountKeplr !== null) {
      this.setState({
        accountKeplr,
      });
    }
    this.checkIndexdDbSize();

    await this.checkAddressLocalStorage();
  }

  componentDidUpdate(prevProps) {
    const { defaultAccount } = this.props;
    if (
      defaultAccount &&
      defaultAccount.name !== null &&
      prevProps.defaultAccount.name !== defaultAccount.name
    ) {
      this.checkAddressLocalStorage();
    }
  }

  checkIndexdDbSize = async () => {
    if (navigator.storage && navigator.storage.estimate) {
      const estimation = await navigator.storage.estimate();
      const countCid = await db.table('cid').count();
      const countFollowing = await db.table('following').count();
      const count = countCid + countFollowing;
      const { quota, usage } = estimation;
      this.setState({
        storageManager: {
          quota,
          usage,
          count,
        },
      });
    } else {
      console.warn('StorageManager not found');
    }
  };

  checkAddressLocalStorage = async () => {
    const { updateCard } = this.state;
    const {
      setBandwidthProps,
      setDefaultAccountProps,
      setAccountsProps,
    } = this.props;
    let localStoragePocketAccountData = [];
    let defaultAccounts = null;
    let defaultAccountsKeys = null;

    const localStoragePocketAccount = await localStorage.getItem(
      'pocketAccount'
    );
    const localStoragePocket = await localStorage.getItem('pocket');

    if (localStoragePocket !== null) {
      const localStoragePocketData = JSON.parse(localStoragePocket);
      const keyPocket = Object.keys(localStoragePocketData)[0];
      const accountPocket = Object.values(localStoragePocketData)[0];
      defaultAccounts = accountPocket;
      defaultAccountsKeys = keyPocket;
    }
    if (localStoragePocketAccount !== null) {
      localStoragePocketAccountData = JSON.parse(localStoragePocketAccount);
      if (localStoragePocket === null) {
        const keys0 = Object.keys(localStoragePocketAccountData)[0];
        localStorage.setItem(
          'pocket',
          JSON.stringify({ [keys0]: localStoragePocketAccountData[keys0] })
        );
        defaultAccounts = localStoragePocketAccountData[keys0];
        defaultAccountsKeys = keys0;
      }
      const accounts = {
        [defaultAccountsKeys]:
          localStoragePocketAccountData[defaultAccountsKeys],
        ...localStoragePocketAccountData,
      };
      setDefaultAccountProps(defaultAccountsKeys, defaultAccounts);
      setAccountsProps(accounts);
      this.setState({
        accounts,
        link: null,
        selectedIndex: '',
        importLinkCli: false,
        selectAccount: null,
        linkSelected: null,
        selectCard: '',
        loading: false,
        addAddress: false,
        defaultAccounts,
        defaultAccountsKeys,
        updateCard: updateCard + 1,
      });
      // this.getLocalStorageLink();
      this.accountBandwidth();
    } else {
      setBandwidthProps(0, 0);
      setDefaultAccountProps(null, null);

      this.setState({
        addAddress: true,
        stage: STAGE_INIT,
        loading: false,
        pocket: [],
        ledger: null,
        returnCode: null,
        addressInfo: null,
        addressLedger: null,
        ledgerVersion: [0, 0, 0],
        time: 0,
        accounts: null,
        link: null,
        selectedIndex: '',
        importLinkCli: false,
        linkSelected: null,
        selectCard: '',
      });
    }
  };

  accountBandwidth = async () => {
    const { defaultAccounts } = this.state;
    const { setBandwidthProps } = this.props;

    if (defaultAccounts !== null && defaultAccounts.cyber) {
      const response = await getAccountBandwidth(defaultAccounts.cyber.bech32);
      if (response !== null) {
        const {
          remained_value: remained,
          max_value: maxValue,
        } = response.neuron_bandwidth;
        if (remained && maxValue) {
          setBandwidthProps(remained, maxValue);
        } else {
          setBandwidthProps(0, 0);
        }
      }
    }
  };

  getLocalStorageLink = async () => {
    const { accounts } = this.state;
    const localStorageStoryLink = localStorage.getItem('linksImport');
    let linkUser = [];
    const dataLink = await getGraphQLQuery(QueryAddress(accounts.cyber.bech32));

    if (dataLink.cyberlink && dataLink.cyberlink.length > 0) {
      linkUser = dataLink.cyberlink;
    }

    if (localStorageStoryLink === null) {
      this.getLink(linkUser);
    } else {
      const linkData = JSON.parse(localStorageStoryLink);
      if (linkData.length > 0) {
        const flattened = [];

        flatten(linkData, flattened);
        let onlyInB = [];
        if (linkUser.length > 0) {
          onlyInB = flattened.filter(comparer(linkUser));
        }
        if (onlyInB.length > 0) {
          const link = groupLink(onlyInB);
          this.setState({ link });
        } else {
          this.setState({ link: null });
        }
      } else {
        this.setState({ link: null });
      }
    }
  };

  getLink = async (dataLinkUser) => {
    const { accounts } = this.state;
    const dataLink = await getImportLink(accounts.cyber.bech32);
    let link = [];

    if (dataLink !== null) {
      let onlyInB = [];
      if (dataLinkUser.length > 0) {
        onlyInB = dataLink.filter(comparer(dataLinkUser));
      }
      if (onlyInB.length > 0) {
        link = groupLink(onlyInB);
      }

      localStorage.setItem('linksImport', JSON.stringify(link));
      if (link.length > 0) {
        this.setState({
          link,
        });
      } else {
        this.setState({
          link: null,
        });
      }
    }
  };

  cleatState = () => {
    this.setState({
      stage: STAGE_INIT,
      table: [],
      ledger: null,
      returnCode: null,
      addressInfo: null,
      addressLedger: null,
      ledgerVersion: [0, 0, 0],
      time: 0,
      addAddress: true,
    });
  };

  onClickImportLink = () => {
    const { importLinkCli, selectCard } = this.state;
    let select = 'importCli';

    if (selectCard === 'importCli') {
      select = '';
    }

    this.setState({
      linkSelected: null,
      selectedIndex: '',
      selectCard: select,
      importLinkCli: !importLinkCli,
    });
  };

  selectLink = (link, index) => {
    const { linkSelected, selectedIndex } = this.state;

    let selectLink = null;

    this.setState({
      importLinkCli: false,
    });

    if (selectedIndex === index) {
      this.setState({
        selectedIndex: '',
        selectCard: '',
      });
    } else {
      this.setState({
        selectedIndex: index,
        selectCard: 'importLedger',
      });
    }

    if (linkSelected !== link) {
      selectLink = link;
      return this.setState({
        linkSelected: selectLink,
      });
    }
    return this.setState({
      linkSelected: selectLink,
    });
  };

  onClickSelect = (e, select, key = '') => {
    const { selectCard, accounts } = this.state;
    let selectd = select;
    let selectAccount = { key, ...accounts[key] };
    if (
      e.target.id === 'containerNameCardv2' ||
      e.target.id === 'containerNameCardv1' ||
      e.target.id === 'containerNameCard' ||
      e.target.id === 'tess' ||
      e.target.id === 'nameCard' ||
      e.target.id === 'gol' ||
      e.target.id === 'storageManager' ||
      e.target.id === 'tweet'
    ) {
      if (selectCard === select) {
        selectd = '';
        selectAccount = null;
        this.setState({ hoverCard: '' });
      }
    }
    this.setState({
      linkSelected: null,
      selectedIndex: '',
      selectCard: selectd,
      selectAccount,
    });
  };

  mouselogEnter = (e, hoverCard, key = '') => {
    const { selectCard, accounts } = this.state;
    const selectAccount = { key, ...accounts[key] };
    if (selectCard === '') {
      this.setState({
        selectAccount,
        hoverCard,
      });
    }
  };

  mouselogLeave = () => {
    const { selectCard } = this.state;
    if (selectCard === '') {
      this.setState({
        hoverCard: '',
        selectAccount: null,
      });
    }
  };

  refreshTweetFunc = () => {
    const { refreshTweet } = this.state;
    this.setState({
      refreshTweet: refreshTweet + 1,
    });
  };

  updateFuncPubkeyCard = (accounts, accountName = '') => {
    const { defaultAccountsKeys } = this.state;
    console.log('defaultAccountsKeys', defaultAccountsKeys);
    console.log('accountName', accountName);

    if (Object.keys(accounts).length > 0) {
      if (accountName === defaultAccountsKeys) {
        this.setState({
          accounts,
          selectCard: '',
          selectAccount: null,
          defaultAccounts: accounts[accountName],
        });
      } else {
        this.setState({ accounts, selectAccount: null, selectCard: '' });
      }
    } else {
      this.checkAddressLocalStorage();
    }
  };

  render() {
    const {
      pocket,
      loading,
      addAddress,
      stage,
      returnCode,
      ledgerVersion,
      accounts,
      link,
      importLinkCli,
      selectedIndex,
      linkSelected,
      selectCard,
      balanceEthAccount,
      accountsETH,
      refreshTweet,
      accountKeplr,
      selectAccount,
      updateCard,
      defaultAccounts,
      defaultAccountsKeys,
      storageManager,
      hoverCard,
    } = this.state;
    const { web3, contractToken, ipfsId } = this.props;
    const { keplr } = this.context;
    let countLink = 0;
    if (link !== null) {
      countLink = [].concat.apply([], link).length;
    }
    if (loading) {
      return (
        <div
          style={{
            width: '100%',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Loading />
        </div>
      );
    }

    if (addAddress && stage === STAGE_INIT) {
      return (
        <div>
          <main className="block-body-home">
            <Pane
              boxShadow="0px 0px 5px #36d6ae"
              paddingX={20}
              paddingY={20}
              marginY={20}
              marginX="auto"
              width="60%"
            >
              <Text fontSize="16px" color="#fff">
                Hi! I am Cyb! Your immortal robot for the <Link to ="/search/great%20web">Great Web</Link>.
                <br></br>
                <br></br>
                I am connected to <Link to="/bootloader">Bostrom</Link> bootloader - common ancestor
                for all future <Link to="/search/superintelligence">Superintelligence</Link>,
                including <Link to="/search/cyber">Cyber</Link>. 
                <br></br>
                <br></br>
                That is why I can answer different
                questions. For example, <Link to="/search/uniswap">uniswap</Link>.
                <br></br>
                <br></br>
                You are the chosen one! I will help you jump out a rat wheel and guide you through the revolution!
                <br></br>
                <br></br>
                <Link to="/portal/cyber-vs-corp">Unlike google</Link>, submit <Link to="/particles">particles</Link> and <Link to="/graph">cyberlinks</Link> to <Link to="/oracle">content oracle</Link>:
                global, universal, collaborative, distributed and everevolving knowledge graph for
                robots, humans, plants, animals and mushrooms. Learn <Link to="">your brain</Link> and earn!
                <br></br>
                <br></br>
                <Link to="/portal/cyber-vs-corp">Unlike facebook</Link>, own your <Link to="">avatar</Link> and <Link to="">post</Link> without fear of blocking. 
                Your <Link to="">community</Link> is trully yours.
                <br></br>
                <br></br>
                <Link to ="/portal/cyber-vs-corp">Unlike twitter's</Link>, manipulative feed use 
                your <Link to ="/sixthSense">sixth sense</Link> which is strictly defined personal feed system on top of content oracle.
                <br></br>
                <br></br>
                <Link to="/portal/cyber-vs-corp">Unlike amazon</Link>, post goods without laws, rules, and platfrom cuts. 
                Manage your deals using <Link to="/contracts">digital contracts</Link> which are fast, convinient and cheap.
                <br></br>
                <br></br>
                <Link to="/portal/cyber-vs-corp">Unlike your bank</Link>, freely <Link to="/">transact</Link> without fear and limits.
                <br></br>
                <br></br>
                <Link to="/portal/cyber-vs-gov">Unlike your government</Link>, your values is trully yours without enforced taxation and embezzled inflation.
                Important decisions are taken out by <Link to="/senate">senate</Link> through the process of transparent and provable voting. 
                <br></br>
                <br></br>
                <Link to="/portal/cyber-vs-corp">Unlike binance or coinbase</Link>, you under control of your values. 
                <Link to="/teleport">Teleport</Link> your tokens without kyc and fear of taxes.
                <br></br>
                <br></br>
                Cyberverse is created for you and your generations! Use this power wisely. Start you journey from <Link to="/search/keplr">installing 
                Keplr</Link> and <Link to="/get%20BOOT">getting BOOT</Link>. 
                <br></br>
                <br></br>
                After this you will be able <Link to="/halloffame">hire heroes</Link> for managing <Link to="/halloffame">dyson sphere</Link> and 
                earn more <Link to="/token/BOOT">BOOT</Link>.
                <br></br>
                <br></br>
                Dyson sphere is producing liquid <Link to="/token/H">Hydrogen or H</Link> tokens using <Link to="/search/biosynthesis">biosynthesis</Link>. 
                For 1 supllied BOOT neurons get 1 H. If you want to <Link to="/halloffame">fire hero</Link> and get your BOOT back, you have to return H.
                <br></br>
                <br></br>
                H allows to produce energy in <Link to="/mint">hydrogen fission reactor or HFR</Link>. Energy needed to learn
                 the superintelligence and submit <Link to="/graph">cyberlinks</Link>. 
                <br></br>
                <br></br>
                Energy is a product of <Link to="/token/A">Ampere or A</Link> token and <Link to="/token/V">Volt or V</Link> token multiplcation. 
                1 V give ability to cast 1 <Link to="/graph">cyberlink</Link> per day. A define rank 
                for <Link to="/particles">particles</Link>. Liquid A and V can be routed through <Link to="/grid">grid</Link>.
                <br></br>
                <br></br>
                BOOT are for everyone. 70% of Genesis supply <Link to="/">is gifted</Link> for ethereans and cosmonauts.
                If you have some - you will be able to claim after <Link to="/">portal activation</Link> in ~March.
                <br></br>
                <br></br>
                <Link to="/genesis">The story</Link> has just begun. Dive into the vision, discover <Link to="https://github.com/cybercongress/cyber/blob/9d1a2a53c0746eed524d68c058bfa66252000e88/story/cyber-roadmap.md">the roadmap</Link> and 
                cyberlink everything you want! May the force be with you!
                <br></br>
                <br></br>
              </Text>
            </Pane>
            <NotFound text=" " />
          </main>
          <ActionBarConnect
            keplr={keplr}
            accountKeplr={accountKeplr}
            updateAddress={this.checkAddressLocalStorage}
            web3={web3}
            accountsETH={accountsETH}
            selectAccount={selectAccount}
          />
        </div>
      );
    }

    if (!addAddress) {
      return (
        <div>
          <main
            style={{ minHeight: 'calc(100vh - 162px)', alignItems: 'center' }}
            className="block-body"
          >
            <Pane
              width="60%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height="100%"
            >
              {defaultAccounts !== null && defaultAccounts.cyber && (
                <TweetCard
                  refresh={refreshTweet}
                  select={selectCard === 'tweet'}
                  onClick={(e) => this.onClickSelect(e, 'tweet')}
                  onMouseEnter={(e) => this.mouselogEnter(e, 'tweet')}
                  onMouseLeave={(e) => this.mouselogLeave()}
                  account={defaultAccounts.cyber.bech32}
                  marginBottom={20}
                  id="tweet"
                />
              )}

              {storageManager && storageManager !== null && ipfsId !== null && (
                <IpfsCard
                  storageManager={storageManager}
                  ipfsId={ipfsId}
                  marginBottom={20}
                  onClick={(e) => this.onClickSelect(e, 'storageManager')}
                  select={selectCard === 'storageManager'}
                  id="storageManager"
                />
              )}

              {accounts !== null &&
                Object.keys(accounts).map((key, i) => (
                  <PubkeyCard
                    key={`${key}_${i}`}
                    onClick={(e) => this.onClickSelect(e, `pubkey_${key}`, key)}
                    select={selectCard === `pubkey_${key}`}
                    pocket={accounts[key]}
                    nameCard={key}
                    onMouseEnter={(e) =>
                      this.mouselogEnter(e, `pubkey_${key}`, key)
                    }
                    onMouseLeave={(e) => this.mouselogLeave(e, key)}
                    marginBottom={20}
                    updateCard={updateCard}
                    defaultAccounts={defaultAccountsKeys === key}
                    contractToken={contractToken}
                    web3={web3}
                    updateFunc={this.checkAddressLocalStorage}
                  />
                ))}

              {link !== null && (
                <PocketCard
                  marginBottom={20}
                  select={selectCard === 'importCli'}
                  onClick={this.onClickImportLink}
                >
                  <Text fontSize="16px" color="#fff">
                    You have created {link !== null && countLink} cyberlinks in
                    euler-5. Import using CLI
                  </Text>
                </PocketCard>
              )}
              {link !== null && pocket.keys === 'ledger' && (
                <ImportLinkLedger
                  link={link}
                  countLink={countLink}
                  select={selectCard === 'importLedger'}
                  selectedIndex={selectedIndex}
                  selectLink={this.selectLink}
                />
              )}
            </Pane>
          </main>
          <ActionBar
            selectCard={selectCard}
            selectAccount={selectAccount}
            hoverCard={hoverCard}
            // actionBar keplr props
            keplr={keplr}
            // actionBar web3
            web3={web3}
            accountsETH={accountsETH}
            // actionBar tweet
            refreshTweet={refreshTweet}
            updateTweetFunc={this.refreshTweetFunc}
            // global props
            updateAddress={this.checkAddressLocalStorage}
            defaultAccounts={defaultAccounts}
            defaultAccountsKeys={defaultAccountsKeys}
          />
        </div>
      );
    }
    return null;
  }
}

const mapDispatchprops = (dispatch) => {
  return {
    setBandwidthProps: (remained, maxValue) =>
      dispatch(setBandwidth(remained, maxValue)),
    setDefaultAccountProps: (name, account) =>
      dispatch(setDefaultAccount(name, account)),
    setAccountsProps: (accounts) => dispatch(setAccounts(accounts)),
  };
};

const mapStateToProps = (store) => {
  return {
    ipfsId: store.ipfs.id,
    defaultAccount: store.pocket.defaultAccount,
  };
};

Wallet.contextType = AppContext;

export default connect(mapStateToProps, mapDispatchprops)(Wallet);

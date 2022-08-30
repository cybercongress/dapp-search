import React, {    useContext,    useEffect,    useState,} from 'react';import { connect } from 'react-redux';import { useLocation, useHistory, Route } from 'react-router-dom';import { Pane } from '@cybercongress/gravity';import BigNumber from 'bignumber.js';import queryString from 'query-string';import { AppContext } from '../../context';import { CYBER, DEFAULT_GAS_LIMITS, WARP_CONTRACTS } from '../../utils/config';import useSetActiveAddress from '../../hooks/useSetActiveAddress';import txs from '../../utils/txs';import { getPin, getPinsCid, getIpfsGatway, getTxs } from '../../utils/search/utils';import { GasPrice } from '@cosmjs/launchpad';import { Dots, ValueImg, ButtonIcon } from '../../components';import ItemsList from './components/networks/items_list';import AddItemForm from './components/networks/items_add';import EditItemForm from './components/networks/items_edit';import styles from './warp.scss';function WarpNetworks({ defaultAccount, ipfs, pushIpfsImage, statusChecker, onSelectLogo}) {    const { jsCyber, keplr } = useContext(AppContext);    const location = useLocation();    const history = useHistory();    const { addressActive } = useSetActiveAddress(defaultAccount);    const [update, setUpdate] = useState(0);    const [editing, setEditing] = useState(false);    const [creating, setCreating] = useState(false);    const [contractData, setContractData] = useState([]);    const loadContractData = (jsCyber, offset) => {        const data = jsCyber.queryContractSmart(            WARP_CONTRACTS.NETWORKS,            {                "get_tokens": {}            }        );        data.then((result) => {            setContractData(result.entries);        });    };    const getItems = (offset) => {        useEffect(() => {            if (jsCyber === null) {                return;            }            loadContractData(jsCyber);        }, [jsCyber]);        return { contractData };    };    const deleteRow = async (id) => {        return new Promise(async (accept, reject) => {            try {                const gasPrice = GasPrice.fromString('0.001boot');                const [{ address }] = await keplr.signer.getAccounts();                const outgoinxTxData = await keplr.execute(                    address,                    WARP_CONTRACTS.NETWORKS,                    {                        "DeleteEntry": {                            "id": id                        }                    },                    txs.calculateFee(400000, gasPrice)                );                let txData = await statusChecker(outgoinxTxData.transactionHash);                if (txData.raw_log.indexOf('failed') !== -1) {                    return reject(new Error(txData.raw_log));                }                setTimeout(() => {                    setEditing(false);                    loadContractData(jsCyber);                    accept()                }, 300);            } catch (e) {                reject(e)            }        })    };    const editRow = async (id, name, chain_id, github, genesis_hash, unbonding_period, logo) => {        return new Promise(async (accept, reject) => {            try {                const gasPrice = GasPrice.fromString('0.001boot');                try {                    const [{ address }] = await keplr.signer.getAccounts();                    let options = { "id": id, };                    if (name) {                        options['name'] = name;                    }                    if (logo) {                        options['logo'] = await pushIpfsImage(logo);                    }                    if (chain_id) {                        options['chain_id'] = chain_id;                    }                    if (github) {                        options['github'] = github;                    }                    if (genesis_hash) {                        options['genesis_hash'] = genesis_hash;                    }                    if (unbonding_period) {                        options['unbonding_period'] = unbonding_period;                    }                    const outgoinxTxData = await keplr.execute(                        address,                        WARP_CONTRACTS.NETWORKS,                        {                            "UpdateEntry": options                        },                        txs.calculateFee(400000, gasPrice)                    );                    let txData = await statusChecker(outgoinxTxData.transactionHash);                    if (txData.raw_log.indexOf('failed') !== -1) {                        return reject(new Error(txData.raw_log));                    }                    setTimeout(() => {                        loadContractData(jsCyber);                        setEditing(false);                        accept();                    }, 300);                } catch (e) {                    reject(e);                }            } catch (e) {                reject(e);            }        })    };    const addRow = async (name, chain_id, github, genesis_hash, unbonding_period, logo) => {        return new Promise(async (accept, reject) => {            try {                const { cid } = await pushIpfsImage(logo);                const gasPrice = GasPrice.fromString('0.001boot');                const [{ address }] = await keplr.signer.getAccounts();                try {                    const outgoinxTxData = await keplr.execute(                        address,                        WARP_CONTRACTS.NETWORKS,                        {                            "NewEntry": {                                "name": name,                                "logo": cid,                                "chain_id": chain_id,                                "github": github,                                "unbonding_period": unbonding_period,                                "genesis_hash": genesis_hash,                            }                        },                        txs.calculateFee(400000, gasPrice)                    );                    let txData = await statusChecker(outgoinxTxData.transactionHash);                    if (txData.raw_log.indexOf('failed') !== -1) {                        return reject(new Error(txData.raw_log));                    }                    setTimeout(() => {                        loadContractData(jsCyber);                        setCreating(false);                        accept();                    }, 300);                } catch (e) {                    reject(e);                }            } catch (e) {                reject(e);            }        })    };    getItems();    let content;    content = (        <div style={{ width: "100%" }}>            <h1>Networks</h1>            <div>                {editing ? (                    <div>                        <EditItemForm data={editing} editRow={editRow} onCancel={(e) => setEditing(false)}                                      onDelete={deleteRow}/>                    </div>                ) : (creating ? (                        <div>                            <AddItemForm addRow={addRow} onSelectLogo={onSelectLogo} onCancel={(e) => setCreating(false)}/>                        </div>                    ) : <div></div>                )                }            </div>            <div className={styles.containerWarpFieldsInputContainer}>                <h2>Available networks</h2>                <ItemsList items={contractData} onEdit={(params) => setEditing(params)}/>                <input type="button" className="btn " value="Add new network" onClick={(e) => setCreating(true)}/>            </div>        </div>    );    return (        <>            <main className="block-body">                <Pane                    width="100%"                    display="flex"                    alignItems="center"                    flexDirection="column"                >                    {content}                </Pane>            </main>        </>    );}const mapStateToProps = (store) => {    return {        mobile: store.settings.mobile,        defaultAccount: store.pocket.defaultAccount,        ipfs: store.ipfs.ipfs,    };};export default connect(mapStateToProps)(WarpNetworks);
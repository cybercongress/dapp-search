import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import { NumericFormat } from 'react-number-format';
import { Pane } from '@cybercongress/gravity';
import { coins } from '@cosmjs/launchpad';
import { useSigningClient } from 'src/contexts/signerClient';
import {
  VoteOption,
  ProposalStatus,
} from 'cosmjs-types/cosmos/gov/v1beta1/gov';
import {
  DEFAULT_GAS_LIMITS,
  BASE_DENOM,
  MEMO_KEPLR,
} from 'src/constants/config';
import useCurrentAddress from 'src/hooks/useCurrentAddress';
import { getTxs } from 'src/services/transactions/lcd';
import {
  TransactionSubmitted,
  Confirmed,
  TransactionError,
  ActionBarContentText,
  Dots,
  ButtonImgText,
  Account,
  Input,
  BtnGrd,
  DenomArr,
  Select,
  ActionBar,
} from '../../components';

// import styles from './ActionBarDetail.module.scss';

import { LEDGER } from '../../utils/config';

const imgKeplr = require('../../image/keplr-icon.svg');
const imgCyber = require('../../image/blue-circle.png');

const {
  STAGE_INIT,
  STAGE_SUBMITTED,
  STAGE_CONFIRMING,
  STAGE_CONFIRMED,
  STAGE_ERROR,
} = LEDGER;

type Props = {
  proposals: any;
  id: string;
  update: () => void;
};

function ActionBarDetail({ proposals, id, update }: Props) {
  const { signer, signingClient } = useSigningClient();
  const [stage, setStage] = useState(STAGE_INIT);
  const [txHash, setTxHash] = useState(null);
  const [txHeight, setTxHeight] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [valueSelect, setValueSelect] = useState(1);
  const [valueDeposit, setValueDeposit] = useState('');

  const addressActive = useCurrentAddress();

  useEffect(() => {
    const confirmTx = async () => {
      if (txHash !== null) {
        setStage(STAGE_CONFIRMING);
        const res = await getTxs(txHash);
        if (res) {
          const response = res.tx_response;
          if (response.logs) {
            setStage(STAGE_CONFIRMED);
            setTxHeight(response.height);
            if (update) {
              update();
            }
            return;
          }
          if (response.code) {
            setStage(STAGE_ERROR);
            setTxHeight(response.height);
            setErrorMessage(response.raw_log);
            return;
          }
        }
        setTimeout(confirmTx, 1500);
      }
    };
    confirmTx();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txHash]);

  const clearState = () => {
    setStage(STAGE_INIT);
    setTxHash(null);
    setTxHeight(null);
    setErrorMessage(null);
    setValueDeposit('');
    setValueSelect(1);
  };

  const generateTxKeplr = async () => {
    if (signingClient && signer && Object.keys(proposals).length > 0) {
      try {
        const [{ address }] = await signer.getAccounts();
        if (addressActive === address) {
          let response = {};
          const fee = {
            amount: [],
            gas: DEFAULT_GAS_LIMITS.toString(),
          };

          setStage(STAGE_SUBMITTED);

          if (
            proposals.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
          ) {
            response = await signingClient.voteProposal(
              address,
              id,
              valueSelect,
              fee,
              MEMO_KEPLR
            );
          }

          if (
            proposals.status === ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD
          ) {
            const amount = coins(parseFloat(valueDeposit), BASE_DENOM);
            response = await signingClient.depositProposal(
              address,
              id,
              amount,
              fee,
              MEMO_KEPLR
            );
          }

          if (response.code === 0) {
            setTxHash(response.transactionHash);
          } else {
            setTxHash(null);
            setErrorMessage(response.rawLog.toString());
            setStage(STAGE_ERROR);
          }
        } else {
          setErrorMessage(
            <span>
              Add address <Account margin="0 5px" address={address} /> to your
              pocket or make active{' '}
            </span>
          );
          setStage(STAGE_ERROR);
        }
      } catch (e) {
        console.log(e);
        setTxHash(null);
        setErrorMessage(e.toString());
        setStage(STAGE_ERROR);
      }
    }
  };

  const onValueChangeDeposit = (values) => {
    setValueDeposit(new BigNumber(values).toNumber());
  };

  if (stage === STAGE_INIT && Object.keys(proposals).length === 0) {
    return (
      <ActionBar>
        <ActionBarContentText>
          <Dots />
        </ActionBarContentText>
      </ActionBar>
    );
  }

  if (
    stage === STAGE_INIT &&
    proposals.status === ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD
  ) {
    return (
      <ActionBar>
        <ActionBarContentText>
          <Pane marginRight={10}>send Deposit</Pane>
          <DenomArr denomValue={BASE_DENOM} onlyImg />
          <div style={{ margin: '0 10px' }}>
            <NumericFormat
              value={valueDeposit}
              onValueChange={(values) => onValueChangeDeposit(values.value)}
              customInput={Input}
              thousandsGroupStyle="thousand"
              thousandSeparator=" "
              decimalScale={3}
              autoComplete="off"
              allowLeadingZeros
            />
          </div>
        </ActionBarContentText>
        <BtnGrd
          text="Deposit"
          disabled={!parseFloat(valueDeposit) > 0}
          onClick={() => generateTxKeplr()}
        />
      </ActionBar>
    );
  }

  if (
    stage === STAGE_INIT &&
    proposals.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
  ) {
    return (
      <ActionBar>
        <ActionBarContentText>
          <Select
            color="green"
            width={200}
            options={[
              { value: String(VoteOption.VOTE_OPTION_YES), text: 'Yes' },
              { value: String(VoteOption.VOTE_OPTION_NO), text: 'No' },
              {
                value: String(VoteOption.VOTE_OPTION_ABSTAIN),
                text: 'Abstain',
              },
              {
                value: String(VoteOption.VOTE_OPTION_NO_WITH_VETO),
                text: 'No With Veto',
              },
            ]}
            valueSelect={String(valueSelect)}
            onChangeSelect={(value) => setValueSelect(Number(value))}
          />
        </ActionBarContentText>
        <ButtonImgText
          text={
            <Pane alignItems="center" display="flex">
              Vote
              <img
                src={imgCyber}
                alt="cyber"
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: '5px',
                  paddingTop: '2px',
                  objectFit: 'contain',
                }}
              />
            </Pane>
          }
          onClick={() => generateTxKeplr()}
          img={imgKeplr}
        />
      </ActionBar>
    );
  }

  if (stage === STAGE_SUBMITTED) {
    return (
      <ActionBar>
        <ActionBarContentText>
          check the transaction <Dots big />
        </ActionBarContentText>
      </ActionBar>
    );
  }

  if (stage === STAGE_CONFIRMING) {
    return <TransactionSubmitted />;
  }

  if (stage === STAGE_CONFIRMED) {
    return (
      <Confirmed
        txHash={txHash}
        txHeight={txHeight}
        onClickBtnClose={() => clearState()}
      />
    );
  }

  if (stage === STAGE_ERROR && errorMessage !== null) {
    return (
      <TransactionError
        errorMessage={errorMessage}
        onClickBtn={() => clearState()}
      />
    );
  }

  return null;
}

export default ActionBarDetail;

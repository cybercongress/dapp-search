import { useEffect, useState, useMemo } from 'react';
import { connect, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BigNumber from 'bignumber.js';

import { MainContainer } from '../portal/components';
import { SigmaContext } from './SigmaContext';

import { CardPassport } from './components';
import { FormatNumberTokens } from '../nebula/components';
import { CYBER } from '../../utils/config';
import { formatNumber } from '../../utils/utils';
import { ActionBar, ContainerGradientText } from '../../components';
import { useLocation, useParams } from 'react-router-dom';
import { useGetPassportByAddress } from './hooks';
import { useRobotContext } from 'src/pages/robot/Robot';
import { RootState } from 'src/redux/store';
import ActionBarPortalGift from '../portal/gift/ActionBarPortalGift';
import STEP_INFO from '../portal/gift/utils';
import styles from './Sigma.module.scss';
import TokenChange from 'src/components/TokenChange/TokenChange';
import { routes } from 'src/routes';

const valueContext = {
  totalCap: 0,
  changeCap: 0,
  dataCap: {},
};

function Sigma() {
  // const [accountsData, setAccountsData] = useState([]);
  const [value, setValue] = useState(valueContext);
  const location = useLocation();

  // const { addressActive: accounts } = useSetActiveAddress(defaultAccount);
  const { address, isOwner, passport } = useRobotContext();
  const [step, setStep] = useState(STEP_INFO.STATE_PROVE);
  const [selectedAddress, setSelectedAddress] = useState<string | null>();

  const {
    pocket: { accounts, defaultAccount },
    passport: defaultPassport,
  } = useSelector((state: RootState) => {
    return {
      pocket: state.pocket,
      passport: state.passport,
    };
  });

  const superSigma = location.pathname === routes.sigma.path;

  const accountsData = useMemo(() => {
    if (!superSigma) {
      return [
        {
          bech32: address,
        },
      ];
    }

    return (
      accounts &&
      Object.keys(accounts).map((key) => {
        return {
          bech32: accounts[key]?.cyber.bech32,
        };
      })
    );
  }, [address, accounts, superSigma]);

  const currentOwner = isOwner || superSigma;
  const currentPassport = currentOwner ? defaultPassport.data : passport;

  useEffect(() => {
    const { dataCap } = value;
    if (Object.keys(dataCap).length > 0) {
      let changeCap = new BigNumber(0);
      let tempCap = new BigNumber(0);
      Object.values(dataCap).forEach((item) => {
        changeCap = changeCap.plus(item.change);
        tempCap = tempCap.plus(item.currentCap);
      });
      updateChangeCap(changeCap);
      updateTotalCap(tempCap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.dataCap]);

  const updateTotalCap = (cap) => {
    setValue((item) => ({
      ...item,
      totalCap: new BigNumber(cap).dp(0, BigNumber.ROUND_FLOOR).toNumber(),
    }));
  };

  const updateChangeCap = (cap) => {
    setValue((item) => ({
      ...item,
      changeCap: new BigNumber(cap).dp(0, BigNumber.ROUND_FLOOR).toNumber(),
    }));
  };

  const updateDataCap = (newData) => {
    setValue((item) => ({
      ...item,
      dataCap: { ...item.dataCap, ...newData },
    }));
  };

  function selectAddress(address: string) {
    const isRemove = selectedAddress === address;

    setSelectedAddress(!isRemove ? address : null);
    setStep(!isRemove ? STEP_INFO.STATE_DELETE_ADDRESS : STEP_INFO.STATE_PROVE);
  }

  return (
    <SigmaContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...value,
        updateTotalCap,
        updateChangeCap,
        updateDataCap,
        isOwner: currentOwner,
      }}
    >
      <div
        style={{
          overflowX: 'auto',
        }}
      >
        <ContainerGradientText
          status="grey"
          userStyleContent={{
            paddingRight: 25,
            paddingLeft: 10,
          }}
        >
          <header className={styles.totalHeader}>
            <div className={styles.image}>
              <div className={styles.circle}>
                <img src={require('./sigma.png')} />
              </div>
              <h3>Sigma</h3>
            </div>

            <TokenChange total={value.totalCap} change={value.changeCap} />
          </header>
        </ContainerGradientText>

        <div
          style={{
            display: 'grid',
            gap: '20px 0',
            gridTemplateColumns: 'minmax(0, 1fr)',
          }}
        >
          {accountsData?.map(({ bech32: address }) => {
            return (
              <CardPassport
                key={address}
                address={address}
                passport={currentPassport}
                selectAddress={currentOwner ? selectAddress : undefined}
                selectedAddress={selectedAddress}
              />
            );
          })}
        </div>
      </div>

      {currentOwner && currentPassport && (
        <ActionBarPortalGift
          setStepApp={(step) => {
            if (
              [STEP_INFO.STATE_INIT, STEP_INFO.STATE_PROVE_DONE].includes(step)
            ) {
              setSelectedAddress(null);
              setStep(STEP_INFO.STATE_PROVE);
            } else {
              setStep(step);
            }
          }}
          activeStep={step}
          selectedAddress={selectedAddress}
          citizenship={currentPassport}
          addressActive={{
            bech32: defaultAccount?.account?.cyber.bech32,
          }}
        />
      )}
    </SigmaContext.Provider>
  );
}

export default Sigma;

// базаво давать добавть адрес и все
// для того что бы доваить космос , эфир , аватар надо создать паспорт
// можно сделать урезанный функционал
// надо добвать иконку что бы создал паспорт, можно другим цветм подсветить

// save address
// {
//     "bech32": "bostrom16macu2qtc0jmqc7txvf0wkz84cycsx728ah0xc",
//     "keyWallet": "keplr",
//     "name": "ledger S"
// }

// pasport sigma
// {
//  bostrom16macu2qtc0jmqc7txvf0wkz84cycsx728ah0xc: {
//     null;
//   }
// }

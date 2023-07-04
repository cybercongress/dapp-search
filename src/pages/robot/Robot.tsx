import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import TxsTable from 'src/containers/account/component/txsTable';
import FeedsTab from 'src/containers/account/tabs/feeds';
import FollowsTab from 'src/containers/account/tabs/follows';
import Heroes from 'src/containers/account/tabs/heroes';
import ForceGraph from 'src/containers/forceGraph/forceGraph';
import TableDiscipline from 'src/containers/gol/table';
import IpfsSettings from 'src/containers/ipfsSettings';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import Sigma from 'src/containers/sigma';
import Taverna from 'src/containers/taverna';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Citizenship } from 'src/types/citizenship';
import { routes } from 'src/routes';
import Layout from './Layout/Layout';
import RoutedEnergy from '../../containers/energy/index';
import UnderConstruction from './UnderConstruction/UnderConstruction';
import Wallet from '../../containers/Wallet/Wallet';
import ZeroUser from './ZeroUser/ZeroUser';
import usePassportContract from 'src/features/passport/usePassportContract';

const RobotContext = React.createContext<{
  address: string | null;
  passport: Citizenship | undefined;
  isOwner: boolean;
  isLoading: boolean;
  addRefetch: (func: () => void) => void;
  refetchData: () => void;
}>({
  address: null,
  passport: undefined,
  isOwner: false,
  isLoading: false,
  addRefetch: () => {},
  refetchData: () => {},
});

export const useRobotContext = () => React.useContext(RobotContext);

function Robot() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [refetchFuncs, setRefetch] = useState<(() => void)[]>([]);

  const {
    pocket: { defaultAccount, accounts },
    passport: currentUserPassport,
  } = useSelector(({ pocket, passport }: RootState) => {
    return {
      pocket,
      passport,
    };
  });

  const { username } = params;
  const nickname =
    username?.includes('@') && username.substring(1, username.length);

  let { address } = params;

  const robotUrl = location.pathname.includes(routes.robot.path);
  let isOwner: boolean | undefined = false;

  if (robotUrl) {
    address =
      defaultAccount.account?.cyber?.bech32 || currentUserPassport.data?.owner;
    isOwner = true;
  } else if (
    nickname &&
    currentUserPassport.data?.extension.nickname === nickname
  ) {
    address = currentUserPassport.data.owner;
  }

  const checkIsOwner = useCallback(
    (address: string | null) => {
      if (!address) {
        return false;
      }

      const ownedAddresses: string[] = [];

      // if (currentUserPassport.data) {
      //   const { owner, extension } = currentUserPassport.data;

      //   if (owner === address || extension.nickname === nickname) {
      //     return true;
      //   }
      //   extension.addresses?.forEach(({ address: addr }) => {
      //     if (addr === address) {
      //       ownedAddresses.push(addr);
      //     }
      //   });
      // }

      if (accounts) {
        Object.keys(accounts).forEach((account) => {
          const { cyber } = accounts[account];

          // only bostrom for now
          if (!cyber) {
            return false;
          }

          const { bech32, keys } = cyber;

          if (bech32 === address && keys !== 'read-only') {
            ownedAddresses.push(bech32);
          }
        });
      }

      if (ownedAddresses.includes(address)) {
        return true;
      }

      return false;
    },
    [accounts]
  );

  if (!isOwner) {
    isOwner = checkIsOwner(address);
  }

  let query = {};
  if (address) {
    query = {
      active_passport: {
        address,
      },
    };
  } else if (nickname) {
    query = {
      passport_by_nickname: {
        nickname,
      },
    };
  }

  const passportContract = usePassportContract<Citizenship>({
    query,
    skip: isOwner,
  });

  const currentRobotAddress = address || passportContract.data?.owner || null;

  // redirect from /robot to /@nickname
  // (passport && passport.extension.nickname === nickname) ||

  const newUser =
    !passportContract.loading &&
    !currentUserPassport.loading &&
    !currentRobotAddress;

  // redirects
  useEffect(() => {
    if (
      newUser &&
      ![routes.robot.path, routes.robot.routes.drive.path].includes(
        location.pathname
      )
    ) {
      navigate(routes.robot.path);
    }

    if (robotUrl && currentUserPassport.data) {
      navigate(
        location.pathname.replace(
          routes.robot.path,
          routes.robotPassport.getLink(
            currentUserPassport.data.extension.nickname
          )
        ),
        {
          replace: true,
        }
      );
    }
  }, [
    robotUrl,
    currentUserPassport.data,
    navigate,
    location.pathname,
    newUser,
  ]);

  const addRefetch = useCallback(
    (func: () => void) => {
      setRefetch((items) => [...items, func]);
    },
    [setRefetch]
  );

  const refetchData = useCallback(() => {
    refetchFuncs.forEach((func) => func());
  }, [refetchFuncs]);

  const contextValue = useMemo(
    () => ({
      address: currentRobotAddress,
      passport: isOwner ? currentUserPassport.data : passportContract.data,
      isOwner,
      addRefetch,
      refetchData,
      isLoading: isOwner
        ? currentUserPassport.loading
        : passportContract.loading,
    }),
    [
      currentUserPassport,
      addRefetch,
      refetchData,
      isOwner,
      currentRobotAddress,
      passportContract,
    ]
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RobotContext.Provider value={contextValue}>
            <Layout />
          </RobotContext.Provider>
        }
      >
        <Route index element={newUser ? <ZeroUser /> : <Sigma />} />
        {/* <Route path="passport" element={<Wallet />} /> */}
        <Route path="timeline" element={<TxsTable />} />
        <Route path="chat" element={<UnderConstruction />} />
        <Route path="badges" element={<TableDiscipline />} />
        <Route path="items" element={<UnderConstruction />} />
        <Route path="security" element={<Heroes />} />
        <Route path="skills" element={<UnderConstruction />} />
        <Route path="rights" element={<UnderConstruction />} />

        <Route path="sense" element={<Taverna />} />
        <Route
          path="drive"
          element={isOwner ? <IpfsSettings /> : <UnderConstruction />}
        />
        <Route path="log" element={<FeedsTab />} />
        <Route path="energy/*" element={<RoutedEnergy />} />
        <Route path="swarm" element={<FollowsTab />} />
        <Route path="brain" element={<ForceGraph />} />
        <Route path="karma" element={<UnderConstruction />} />
        <Route path="soul" element={<UnderConstruction />} />

        <Route path="*" element={<p>Page should not exist</p>} />
      </Route>
    </Routes>
  );
}

export default Robot;

import { useQuery } from '@tanstack/react-query';
import { useBackend } from 'src/contexts/backend';
import { isParticle as isParticleFunc } from 'src/features/particles/utils';
import { selectCurrentAddress } from 'src/redux/features/pocket';
import { useAppSelector } from 'src/redux/hooks';
import { TransactionDto } from 'src/services/CozoDb/types/dto';
import {
  EntryType,
  LinkDbEntity,
  TransactionDbEntity,
} from 'src/services/CozoDb/types/entities';

type Props = {
  // neuron or particle
  id?: string;
};

// pass as prop maybe
const REFETCH_INTERVAL = 1000 * 20;

function useSenseItem({ id }: Props) {
  const { senseApi } = useBackend();
  const address = useAppSelector(selectCurrentAddress);

  const enabled = Boolean(senseApi && id);

  const getListQuery = useQuery({
    queryKey: ['senseApi', 'getList', address],
    queryFn: async () => {
      return senseApi!.getList();
    },
    enabled,
  });

  const isParticle = Boolean(id && isParticleFunc(id));

  const entryType = id
    ? getListQuery?.data?.find((item) => item.id === id)?.entryType
    : undefined;
  // Tweets is same as chat but combined with tweet particles from meta
  const isChatEntry = entryType === EntryType.chat;

  const getTxsQuery = useQuery({
    queryKey: ['senseApi', 'getTransactions', address, id],
    queryFn: async () => {
      return senseApi!.getTransactions(id!);
    },
    enabled: enabled && !isParticle && !isChatEntry && !!address,
    refetchInterval: REFETCH_INTERVAL,
  });

  const getLinksQuery = useQuery({
    queryKey: ['senseApi', 'getLinks', address, id],
    queryFn: async () => {
      return senseApi!.getLinks(id!);
    },
    enabled: enabled && isParticle,
    refetchInterval: REFETCH_INTERVAL,
  });

  const getChatQuery = useQuery({
    // getFriendItems method to retrive chats and tweets
    queryKey: ['senseApi', 'getFriendItems', address, id],
    queryFn: async () => {
      return senseApi!.getFriendItems(id!);
    },
    enabled: enabled && isChatEntry && !!address,
    refetchInterval: REFETCH_INTERVAL,
  });

  console.log('entryType', entryType);
  console.log('isParticle', isParticle);
  console.log('isChat', isChatEntry);
  console.log('----getTxsQuery', getTxsQuery);
  console.log('----getLinks', getLinksQuery);
  console.log('----getChatQuery', getChatQuery);

  return {
    data: (getTxsQuery.data || getLinksQuery.data || getChatQuery.data) as
      | TransactionDbEntity[]
      | LinkDbEntity[],
    loading:
      !!id &&
      (getTxsQuery.isFetching ||
        getLinksQuery.isFetching ||
        getChatQuery.isFetching),
    error: (getTxsQuery.error || getLinksQuery.error) as Error | undefined,
    refetch:
      getTxsQuery.refetch || getLinksQuery.refetch || getChatQuery.refetch,
  };
}

export default useSenseItem;

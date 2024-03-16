import { useSigningClient } from 'src/contexts/signerClient';
import Soft3MessageFactory from 'src/soft.js/api/msgs';
import { Coin } from '@cosmjs/launchpad';
import { useMutation } from '@tanstack/react-query';

export type Props = {
  contractAddress: string;
  query: any;
  funds?: Coin[] | undefined;
};

function useExecuteContract({ contractAddress, query, funds }: Props) {
  const { signer, signingClient } = useSigningClient();

  const { mutate, data, isLoading, error } = useMutation({
    // mutationKey: 'useExecuteContract',
    mutationFn: async () => {
      if (!signer || !signingClient) {
        return Promise.reject('No signer or signing client');
      }

      const [{ address }] = await signer.getAccounts();

      return signingClient.execute(
        address,
        contractAddress,
        query,
        Soft3MessageFactory.fee(2),
        '',
        funds
      );
    },
  });

  console.log(data);

  return {
    isLoading,
    isReady: Boolean(signer && signingClient),
    transactionHash: data?.transactionHash as string | undefined,
    error: error?.message,
    mutate,
  };
}

export default useExecuteContract;

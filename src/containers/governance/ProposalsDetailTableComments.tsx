import SearchResults from '../Search/SearchResults';
import { useParams } from 'react-router-dom';
import { useBackend } from 'src/contexts/backend/backend';
import { getIpfsHash } from 'src/utils/ipfs/helpers';
import { encodeSlash } from '../../utils/utils';
import { useState, useEffect } from 'react';

function ProposalsDetailTableComments() {
  const { proposalId } = useParams();
  const { ipfsApi } = useBackend();
  const proposalQuery = `bostrom proposal ${proposalId}`;
  const [processedQuery, setProcessedQuery] = useState('');
  useEffect(() => {
    const processQuery = async () => {
      const hash = await getIpfsHash(encodeSlash(proposalQuery));
      if (hash) {
        setProcessedQuery(hash);
      } else {
        const newHash = await ipfsApi.addContent(proposalQuery);
        setProcessedQuery(newHash);
      }
    };

    processQuery();
  }, [proposalQuery, ipfsApi]);

  return <SearchResults query={processedQuery} />;
}

export default ProposalsDetailTableComments;

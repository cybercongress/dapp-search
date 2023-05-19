import { useState, useEffect } from 'react';
import { toString as uint8ArrayToString } from 'uint8arrays/to-string';

import useQueueIpfsContent from 'src/hooks/useQueueIpfsContent';

import { useQueryClient } from 'src/contexts/queryClient';
import { getPassportByNickname } from 'src/containers/portal/utils';
import { IpfsRawDataResponse } from 'src/utils/ipfs/ipfs';
import ContentIpfs from '../contentIpfs';

import { ContentOptions } from '../contentIpfs.d';
import { getResponseResult } from 'src/utils/ipfs/stream-utils';

function ParticleItem({
  content,
  search,
  options,
  onCidChange,
}: {
  content: IpfsRawDataResponse;
  search?: boolean;
  options?: ContentOptions;
  onCidChange: (cid: string) => void;
}) {
  const queryClient = useQueryClient();
  const [cid, setCid] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [nickname, setNickname] = useState('');
  const { status, content: particleContent } = useQueueIpfsContent(
    cid,
    1, // options?.rank,
    options?.parentId
  );

  useEffect(() => {
    const loadPassport = async () => {
      if (content) {
        const domainNickname = uint8ArrayToString(
          await getResponseResult(content)
        );
        const nickname = domainNickname.split('.')[0];
        setNickname(nickname);
        const passport = await getPassportByNickname(queryClient, nickname);
        if (passport) {
          const particleCid = passport.extension.particle;
          setCid(particleCid);
          onCidChange(particleCid);
        }
      }
    };
    loadPassport().finally(() => setLoading(false));
  }, [queryClient, content]);

  if (loading) {
    return <div>{`Loading particle for ${nickname} ...`}</div>;
  }
  if (!cid) {
    return <div>{`No particle exist for ${nickname}`}</div>;
  }

  return (
    <ContentIpfs
      status={status}
      content={particleContent}
      cid={cid}
      search={search}
    />
  );
}

export default ParticleItem;

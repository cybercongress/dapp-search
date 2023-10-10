import { Link } from 'react-router-dom';
import { DenomArr } from 'src/components';
import fromToIbc from 'images/fromToIbc.svg';

const defaultData = [
  {
    token:
      'ibc/15E9C5CF5969080539DB395FA7D9C0868265217EFC528433671AAF9B1912D159',
    networkFrom: 'cosmoshub-4',
    networkTo: 'bostrom',
  },
  {
    token:
      'ibc/B6CAD3F7469F3FAD18ED2230A6C7B15E654AB2E1B66E1C70879C04FEF874A863',
    networkFrom: 'gravity-bridge-3',
    networkTo: 'bostrom',
  },
];

function BridgeAction() {
  const renderItem = defaultData.map((item, index) => {
    const searchParam = `networkFrom=${item.networkFrom}&networkTo=${item.networkTo}&token=${item.token}`;
    return (
      <Link
        to={`bridge?${searchParam}`}
        key={index}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DenomArr denomValue={item.token} size={30} />
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <DenomArr type="network" denomValue={item.networkFrom} />
          <img
            src={fromToIbc}
            alt="fromToIbc"
            // className={styles.fromToIbcImg}
            style={{
              width: '40px',
              height: '30px',
              marginLeft: '-5px',
            }}
          />

          <DenomArr type="network" denomValue={item.networkTo} />
        </div>
      </Link>
    );
  });
  return (
    <div>
      Bridge
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {renderItem}
      </div>
    </div>
  );
}

export default BridgeAction;

import { Pane, Text } from '@cybercongress/gravity';
import { Link } from 'react-router-dom';
import Display from 'src/components/containerGradient/Display/Display';
import { BASE_DENOM, DIVISOR_CYBER_G } from 'src/constants/config';
import { FormatNumber } from '../../components';
import { formatNumber } from '../../utils/utils';
import KeybaseCheck from './keybaseCheck';

const dateFormat = require('dateformat');

function Row({ value, title, marginBottom }) {
  return (
    <Pane
      key={`${value}-container`}
      style={{ marginBottom: marginBottom || 0 }}
      className="txs-contaiter-row"
      display="flex"
    >
      <Text
        key={`${title}-title`}
        display="flex"
        fontSize="16px"
        textTransform="capitalize"
        color="#fff"
        whiteSpace="nowrap"
        width="240px"
        marginBottom="5px"
        lineHeight="20px"
      >
        {title} :
      </Text>
      <Text
        key={`${value}-value`}
        display="flex"
        color="#fff"
        fontSize="16px"
        wordBreak="break-all"
        lineHeight="20px"
        marginBottom="5px"
        flexDirection="column"
        alignItems="flex-start"
      >
        {value}
      </Text>
    </Pane>
  );
}

function Delegated({ data, marginBottom }) {
  const {
    self,
    selfPercent,
    total,
    jailed,
    unbondingTime,
    unbondingHeight,
    delegatorShares,
  } = data;

  const {
    rate,
    max_rate: maxRate,
    max_change_rate: maxChangeRate,
  } = data.commission.commission_rates;

  return (
    <Pane
      marginBottom={marginBottom || 0}
      // className="ValidatorInfo__Delegated-MissedBlocks-wrapper"
    >
      <Display>
        {/* <CardTemplate paddingLeftChild={10} paddingBottom={20}> */}
        <Row title="Operator Address" value={data.operator_address} />
        <Row
          title="Address"
          value={
            <Link to={`/network/bostrom/contract/${data.delegateAddress}`}>
              {data.delegateAddress}
            </Link>
          }
        />
        {data.description.identity && (
          <Row
            title="Identity"
            value={<KeybaseCheck identity={data.description.identity} />}
          />
        )}
        <Row
          title="Delegator Shares"
          value={`${formatNumber(
            Math.floor(delegatorShares)
          )} ${BASE_DENOM.toUpperCase()}`}
        />
        <Row
          title="Token"
          value={`${formatNumber(Math.floor(total))} ${BASE_DENOM.toUpperCase()}`}
        />
        <Row
          title="Commission Rate"
          value={`${formatNumber(rate * 100, 2)}%`}
        />
        <Row title="Max Rate" value={`${formatNumber(maxRate * 100, 2)}%`} />
        <Row
          title="Max Change Rate"
          value={`${formatNumber(maxChangeRate * 100, 2)}%`}
        />
        <Row
          title="Self Stake"
          value={
            <Pane display="flex">
              {formatNumber(selfPercent, 2)}% (
              <FormatNumber
                number={formatNumber(self / DIVISOR_CYBER_G, 6)}
                currency={`G${BASE_DENOM.toUpperCase()}`}
                fontSizeDecimal={12}
              />
              )
            </Pane>
          }
        />
        {data.description.details && (
          <Row title="Details" value={data.description.details} />
        )}
        {jailed && (
          <Pane>
            <Row
              title="Unbonding Height"
              value={formatNumber(parseFloat(unbondingHeight))}
            />
            <Row
              title="Unbonding Time"
              value={dateFormat(unbondingTime, 'dd/mm/yy hh:mm tt')}
            />
          </Pane>
        )}
        {/* </CardTemplate> */}
      </Display>
    </Pane>
  );
}

export default Delegated;

import React from 'react'
import numeral from 'numeral'
import './YieldTable.scss'

import BootstrapTable from 'react-bootstrap-table-next'

// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Image/*, OverlayTrigger, Popover*/} from 'react-bootstrap'
import {/*addressUrl, */coinLogoUrl, poolLogoUrl} from '../utility/api'
import {formatFiat, /*formatInteger,*/ formatPercentage} from '../utility/utils'

const expandRow = {
  renderer: pool => (
    <Row>
    <Col>
      <Row>
        { pool.vaultUrl &&
          <Col><b>{<a href={pool.vaultUrl} target="_blank" rel="noreferrer">Deposit on Beefy / View APY Chart</a>}</b></Col>}

      </Row>
      <Row>
        { (pool.addLiquidityUrl || pool.buyTokenUrl) &&
          <Col>{pool.addLiquidityUrl && <a href={pool.addLiquidityUrl} target="_blank" rel="noreferrer">Add Liquidity</a>} {(pool.addLiquidityUrl && pool.buyTokenUrl) && ' | '} {pool.buyTokenUrl && <a href={pool.buyTokenUrl} target="_blank" rel="noreferrer">Buy Token</a>}</Col>}
        {/*pool.tokenAddress &&
          <Col><a href={addressUrl(pool.network, pool.tokenAddress)} target="_blank" rel="noreferrer">{pool.tokenAddress}</a></Col>*/}
      </Row>
    </Col>
    </Row>
  )
}

const poolFormatter = (_, {logo, assets, name}) =>
  <div className='pool-name'>
    <span>{logo ?
            <Image src={poolLogoUrl(logo)} /> :
          assets.length === 1 ?
            <Image src={coinLogoUrl(assets[0])} roundedCircle /> :
              assets.map(asset => <Image className='stacked-logo' key={asset} src={coinLogoUrl(asset)} roundedCircle />)
        } {name}</span>
  </div>

const networkFormatter = network => network.toUpperCase()


const prettyPercentage = apy => {
  const text = formatPercentage(apy)
  return text === '' ? '🔥' : text
}

const formatApyAndAmount = (apy, amount) =>
  <>
    <span>{prettyPercentage(apy)}</span>
    {amount && formatFiat(amount) !== '' ? <span className={'text-success apy-fiat-text'}>{formatFiat(amount)}</span> : ''}
  </>

const apyFormatter = (totalApy, {totalApyAmount}) => formatApyAndAmount(totalApy, totalApyAmount)
const monthlyFormatter = (monthlyApy, {monthlyApyAmount}) => formatApyAndAmount(monthlyApy, monthlyApyAmount)
const dailyFormatter = (dailyApy, {dailyApyAmount}) => formatApyAndAmount(dailyApy, dailyApyAmount)

const withdrawalFeeFormatter = (withdrawalFee, {dailyApy}) => <span className={
    numeral(withdrawalFee).value() === 0 ? '' :
    numeral(withdrawalFee).value() > dailyApy ? 'text-danger' : ''}>{(withdrawalFee === "0%" ? '-' : withdrawalFee)}</span>

const depositFeeFormatter = (depositFee, {dailyApy}) => <span className={
    numeral(depositFee).value() === 0 ? '' :
    numeral(depositFee).value() > dailyApy ? 'text-danger' : ''}>{(depositFee === "0%" ? '-' : depositFee)}</span>

const safetyScoreFormatter = (safetyScore) => <span className={
    numeral(safetyScore).value() === 9.991337 ? 'text-warning' : 
    numeral(safetyScore).value() === 10 ? 'text-success' : 
    numeral(safetyScore).value() <= 8 ? 'text-danger' : ''}>{(safetyScore === 9.991337 ? '?' : safetyScore === 10 ? '✓' : numeral(safetyScore).format("0.0"))}</span>
/*
const tradingFeesFormatter = (_, pool) =>
pool.tradingApr ?
  <OverlayTrigger
    overlay={
      <Popover id="popover-basic">
        <Popover.Title as="h3">APY Breakdown</Popover.Title>
        <Popover.Content>
          <Table striped bordered hover>
            <tbody>
            {pool.compoundingsPerYear && <tr>
              <td>Compounds</td>
              <td>{formatInteger(pool.compoundingsPerYear)}</td>
            </tr>}
            {pool.vaultApr && <tr>
              <td>Vault APR</td>
              <td>{prettyPercentage(pool.vaultApr)}</td>
            </tr>}
            {pool.beefyPerformanceFee && <tr>
              <td>Beefy Fee</td>
              <td>{prettyPercentage(pool.beefyPerformanceFee)}</td>
            </tr>}
            {pool.callFee && <tr>
              <td>Call Fee</td>
              <td>{prettyPercentage(pool.callFee/100)}</td>
            </tr>}
            {pool.vaultApy && <tr>
              <td>Vault APY</td>
              <td>{prettyPercentage(pool.vaultApy)}</td>
            </tr>}
            {pool.lpFee && <tr>
              <td>LP Fee</td>
              <td>{prettyPercentage(pool.lpFee)}</td>
            </tr>}
            {pool.tradingApr && <tr>
              <td>Trading APR</td>
              <td>{prettyPercentage(pool.tradingApr)}</td>
            </tr>}
            {pool.totalApy && <tr>
              <td>Total APY</td>
              <td>{prettyPercentage(pool.totalApy)}</td>
            </tr>}
            </tbody>
          </Table>
        </Popover.Content>
      </Popover>
    }
  >
    <Button variant="success">Included</Button>
  </OverlayTrigger> : pool.assets.length === 1 ? '-' : "Unknown"
*/

const tvlFormatter = tvl => <span className={
    numeral(tvl).value() >= 1000000 ? 'text-success' : 
    numeral(tvl).value() < 100000 ? 'text-danger' : ''}>{formatFiat(tvl)}</span>

const columns = [
  {
    dataField: "network",
    text: "Network",
    sort: true,
    formatter: networkFormatter
  },

  {
    dataField: "platformId",
    text: "Platform",
    sort: true
  },
  {
    dataField: "name",
    text: "Pool",
    formatter: poolFormatter
  },
  {
    dataField: "totalApy",
    text: "APY",
    sort: true,
    formatter: apyFormatter
  },
  {
    dataField: "monthlyApy",
    text: "Monthly",
    sort: true,
    formatter: monthlyFormatter
  },
  {
    dataField: "dailyApy",
    text: "Daily",
    sort: true,
    formatter: dailyFormatter
  },
  {
    dataField: "withdrawalFee",
    text: "Withdraw",
    sort: true,
    formatter: withdrawalFeeFormatter
  },
  {
    dataField: "depositFee",
    text: "Deposit",
    sort: true,
    formatter: depositFeeFormatter
  },
  // {
  //   dataField: "tradingApr",
  //   text: "Trading Fees",
  //   formatter: tradingFeesFormatter
  // },
  {
    dataField: "safetyScore",
    text: "Safe",
    sort: true,
    formatter: safetyScoreFormatter
  },
  {
    dataField: "tvl",
    text: "TVL",
    sort: true,
    formatter: tvlFormatter
  },
]

const YieldTable = ({yields}) =>
  <BootstrapTable
    keyField="key"
    data={yields}
    columns={columns}
    expandRow={expandRow}
    striped
    hover
    bootstrap4
    defaultSorted={[{ dataField: 'totalApy', order: 'desc'}]}/>

export default YieldTable

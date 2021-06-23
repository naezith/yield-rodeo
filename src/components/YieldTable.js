import React from 'react'
import numeral from 'numeral'
import './YieldTable.scss'

import BootstrapTable from 'react-bootstrap-table-next'

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Image, OverlayTrigger, Popover} from 'react-bootstrap'
import {addressUrl, coinLogoUrl, poolLogoUrl} from '../utility/api'
import {formatFiat, formatInteger, formatPercentage} from '../utility/utils'

const expandRow = {
  renderer: pool => (
    <Row>
      { (pool.addLiquidityUrl || pool.buyTokenUrl) &&
        <Col>{pool.addLiquidityUrl && <a href={pool.addLiquidityUrl} target="_blank" rel="noreferrer">Add Liquidity</a>} {(pool.addLiquidityUrl && pool.buyTokenUrl) && ' | '} {pool.buyTokenUrl && <a href={pool.buyTokenUrl} target="_blank" rel="noreferrer">Buy Token</a>}</Col>}
      {pool.tokenAddress &&
        <Col><a href={addressUrl(pool.network, pool.tokenAddress)} target="_blank" rel="noreferrer">{pool.tokenAddress}</a></Col>}
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

const apyFormatter = totalApy => formatPercentage(totalApy)

const dailyFormatter = dailyApy => formatPercentage(dailyApy)

const withdrawalFeeFormatter = (withdrawalFee, {dailyApy}) => <span className={
    numeral(withdrawalFee).value() === 0 ? 'text-success' :
    numeral(withdrawalFee).value() > dailyApy ? 'text-danger' : ''}>{withdrawalFee}</span>

const tradingFeesFormatter = (_, pool) =>
pool.tradingApr ?
  <OverlayTrigger
    trigger={['focus']}
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
              <td>{formatPercentage(pool.vaultApr)}</td>
            </tr>}
            {pool.beefyPerformanceFee && <tr>
              <td>Beefy Fee</td>
              <td>{formatPercentage(pool.beefyPerformanceFee)}</td>
            </tr>}
            {pool.callFee && <tr>
              <td>Call Fee</td>
              <td>{formatPercentage(pool.callFee/100)}</td>
            </tr>}
            {pool.vaultApy && <tr>
              <td>Vault APY</td>
              <td>{formatPercentage(pool.vaultApy)}</td>
            </tr>}
            {pool.lpFee && <tr>
              <td>LP Fee</td>
              <td>{formatPercentage(pool.lpFee)}</td>
            </tr>}
            {pool.tradingApr && <tr>
              <td>Trading APR</td>
              <td>{formatPercentage(pool.tradingApr)}</td>
            </tr>}
            {pool.totalApy && <tr>
              <td>Total APY</td>
              <td>{formatPercentage(pool.totalApy)}</td>
            </tr>}
            {pool.totalApy && <tr>
              <td>Total APY</td>
              <td>{formatPercentage(pool.totalApy)}</td>
            </tr>}
            </tbody>
          </Table>
        </Popover.Content>
      </Popover>
    }
  >
    <Button variant="success">Included</Button>
  </OverlayTrigger> : pool.assets.length === 1 ? '-' : "Unknown"

const tvlFormatter = tvl => formatFiat(tvl)

const columns = [
  {
    dataField: "network",
    text: "Network",
    sort: true,
    formatter: networkFormatter
  },

  {
    dataField: "platform",
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
    dataField: "dailyApy",
    text: "Daily",
    sort: true,
    formatter: dailyFormatter
  },
  {
    dataField: "withdrawalFee",
    text: "Withdraw Fee",
    sort: true,
    formatter: withdrawalFeeFormatter
  },
  {
    dataField: "tradingApr",
    text: "Trading Fees",
    formatter: tradingFeesFormatter
  },
  {
    dataField: "tvl",
    text: "TVL",
    sort: true,
    formatter: tvlFormatter
  }
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

import React from 'react'
import './YieldTable.scss'

import BootstrapTable from 'react-bootstrap-table-next'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import {Image, OverlayTrigger, Popover} from 'react-bootstrap'
import {coinLogoUrl, poolLogoUrl} from '../utility/api'
import {calcDaily, formatFiat, formatInteger, formatPercentage} from '../utility/utils'

const poolFormatter = pool =>
  <div className='pool-name'>
    <span>{pool.logo ?
            <Image src={poolLogoUrl(pool.logo)} /> :
          pool.assets.length === 1 ?
            <Image src={coinLogoUrl(pool.assets[0])} roundedCircle /> :
              pool.assets.map(asset => <Image className='stacked-logo' key={asset} src={coinLogoUrl(asset)} roundedCircle />)
        } {pool.name}</span>
  </div>

const networkFormatter = network => network.toUpperCase()

const apyFormatter = totalApy => formatPercentage(totalApy)

const dailyFormatter = totalApy => formatPercentage(calcDaily(totalApy))

const tradingFeesFormatter = pool =>
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
              <td>Compounds </td>
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
    dataField: "self",
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
    dataField: "totalApy",
    text: "Daily",
    sort: true,
    formatter: dailyFormatter
  },
  {
    dataField: "self",
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
    striped
    hover
    bootstrap4
    defaultSorted={[{ dataField: 'totalApy', order: 'desc'}]}/>

export default YieldTable

import React, {useState} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSync} from '@fortawesome/free-solid-svg-icons'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import './App.css'
import {loadWeb3, connectWallet } from './utility/web3_utils'
import {Col, Form} from 'react-bootstrap'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [myAddress, setMyAddress] = useState('')
  const [imageCount, setImageCount] = useState(-1)
  const [images, setImages] = useState([])

  const fetchInformation = async () => {
      console.log('Fetching information')

      // Get image count
      //const _imageCount = await contract.methods.imageCount().call()
      //setImageCount(_imageCount)
  }

  const loadWeb3AndConnectWallet = async () => {
    setIsLoading(true)

    const loaded = await loadWeb3()
    if (loaded) {
      setMyAddress(await connectWallet())
      await fetchInformation()
    }

    setIsLoading(false)
  }

  return (
    <Container className="p-3 App full-height">
      <Jumbotron>
        <h1 className="header">NFT Marketplace</h1>
        {
          isLoading ?
            <Spinner animation="border" role="status"/> :
            myAddress === '' ?
              <Button size="lg" onClick={loadWeb3AndConnectWallet}>Connect Wallet</Button> :
              <h5>{myAddress}</h5>
        }

        {
          imageCount !== -1 &&
          <>
            <h5>Image count: {imageCount}</h5>
            <Button size="lg" variant="success" onClick={async () => {
              await fetchInformation()
            }}>
              <FontAwesomeIcon icon={faSync}/>
            </Button>
          </>
        }
      </Jumbotron>

      {myAddress !== '' &&
      <Jumbotron>
        <h2 className="header">Share an Image!</h2>
      </Jumbotron>
      }
      {
        images.length > 0 &&
        images.map(image =>
          <Card key={image.id + image.tipHash} className="image-card">
            <Row>
              <Col>
                <img alt={image.hash} height="250em" src={'https://ipfs.infura.io/ipfs/' + image.hash}></img>
              </Col>
              <Col className="image-info">
                <p><b>ID:</b> #{image.id}</p>
                <p><b>Author:</b> {image.author}</p>
                <p><b>Description:</b> {image.description}</p>
                <p><b>CID:</b> {image.hash}</p>
              </Col>
            </Row>
          </Card>)
      }
    </Container>
  )
}

export default App

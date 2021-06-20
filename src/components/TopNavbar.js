import {Nav, Navbar, OverlayTrigger, Tooltip} from 'react-bootstrap'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import './TopNavbar.scss'
import {useState} from 'react'

const TopNavbar = () => {
  const [copied, setCopied] = useState(false)
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/hat_short.png"
            className="navbar-image"
          />{'   '}
          yield.rodeo
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{copied ? 'Copied!' : 'Click to copy!'}</Tooltip>}
          >
          <CopyToClipboard text={'0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C'}
          onCopy={() => {
            setCopied(true)
            setTimeout(() => { setCopied(false) },1000)
          }}>
            <span>❤️ 0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C ❤</span>
          </CopyToClipboard>
        </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNavbar
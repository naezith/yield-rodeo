import {Nav, Navbar/*, OverlayTrigger, Tooltip*/} from 'react-bootstrap'

// import {CopyToClipboard} from 'react-copy-to-clipboard';
import './TopNavbar.scss'
// import {useState} from 'react'

const TopNavbar = () => {
  // const [copied, setCopied] = useState(false)
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">
          <img
            alt=""
            src="/hat_short.png"
            className="navbar-image"
          />{'   '}
          <span className='navbar-title'>yield.rodeo</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
        {/* Donation button
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{copied ? 'Copied!' : 'Click to copy!'}</Tooltip>}
          >
            <CopyToClipboard text={'0x00000000000000000000000'}
            onCopy={() => {
              setCopied(true)
              setTimeout(() => { setCopied(false) },1000)
            }}>
              <span>❤️ Donate: 0x00000000000000000000000 ❤️</span>
            </CopyToClipboard>
          </OverlayTrigger>
          */}
        </Nav>
      <Nav>
        <Nav.Link className='navbar-contact' href={'https://naezith.com/?id=contact'} target="_blank" rel="noreferrer">Contact</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default TopNavbar
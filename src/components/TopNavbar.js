import {Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import './TopNavbar.scss'

const TopNavbar = () =>
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
      ❤️ 0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C ❤️
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default TopNavbar
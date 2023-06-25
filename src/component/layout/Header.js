import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { MdDashboard } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { ImLibrary} from 'react-icons/im';
import { FaSignOutAlt,FaSignInAlt,FaUserPlus} from 'react-icons/fa';




export const Header = () => {
  return (
    <Navbar expand="md"  bg='dark' variant="dark">
      <Container>
        <Navbar.Brand href="#home"><ImLibrary/>Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><AiFillHome/>Home</Nav.Link>
            <Nav.Link href="#dashboard"><MdDashboard/>Dashboard</Nav.Link>
            <Nav.Link href="#signout "><FaSignOutAlt/>Signout</Nav.Link>
            <Nav.Link href="#singin"><FaSignInAlt/>Singin</Nav.Link>
            <Nav.Link href="#singup"><FaUserPlus/>Singup</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



import React, { Component } from 'react';

import {Navbar, Nav, Dropdown, Header, Container} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Link} from "react-router-dom";
import './assets/css/header.css';
import Logo from './assets/image/logo.png';

export default class NavBarBeforeLogin extends Component {
    render() {
        return (
            <>
             <Navbar>
    <Navbar.Header>
    <Link to="/login">
      {/* <a href="www.google.com" className="navbar-brand logo"> */}
        <img src={Logo} alt="Logo" title="Company Logo" />
      {/* </a> */}
      </Link>
    </Navbar.Header>
    <Navbar.Body>
     
      <Nav pullRight>
      <Dropdown title="Log In">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>
    </Navbar.Body>
  </Navbar>
  <div className="show-container">
  <Container>
      <Header className="headernav">&nbsp;<br />&nbsp;</Header>
    
    </Container>
    
    </div>
            </>
        )
    }
}

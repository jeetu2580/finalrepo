import React, { Component } from 'react';

import {Navbar, Nav, Dropdown, Header, Container, Icon} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Link} from "react-router-dom";
import './assets/css/header.css';
import Logo from './assets/image/logo.png';

export default class NavBarAfterLogin extends Component {
    render() {
        return (
            <>
             <Navbar>
    <Navbar.Header>
    {/* <Link to="/login"> */}
      {/* <a href="www.google.com" className="navbar-brand logo"> */}
        <img src={Logo} alt="Logo" title="Company Logo" />
      {/* </a> */}
      {/* </Link> */}
    </Navbar.Header>
    <Navbar.Body>
    <Nav className="afterLoginMenu">
    {/* <Link to="/home"> <Nav.Item class="HomeIcon"><Icon icon ="home" size="2x" /></Nav.Item></Link> */}
        
        <Dropdown title="Campaigns">
        <Dropdown.Item href="/createcampaign">Create Campaign</Dropdown.Item>
          
        </Dropdown>
        <Dropdown title="Asset Library">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
        <Dropdown title="Data Sets/Audience">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
        <Nav.Item>Reporting</Nav.Item>
        <Link to="/billing"><Nav.Item>Billing</Nav.Item></Link>
      </Nav>
      <Nav pullRight>
      <Nav.Item ><Icon icon ="user-circle" size="2x" style={{"font-size": 20, "margin-right": -14}}/></Nav.Item>
          <Dropdown title="Hi Stephanie">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>
    </Navbar.Body>
  </Navbar>
  <div className="show-container">
  <Container>
      <Header className="headernavafterlogin">&nbsp;<br />&nbsp;</Header>
    
    </Container>
    
    </div>
            </>
        )
    }
}

import React, { Component } from 'react';

import {Navbar, Nav, Dropdown, Header, Container, Icon, Col, Row} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import homeicon from './assets/icons/home.svg';
import searchicon from './assets/icons/search.svg';
import { Link, Redirect} from "react-router-dom";
import './assets/css/header.css';
import Logo from './assets/image/logo.png';
import NavItem from 'rsuite/lib/Nav/NavItem';
import {userLoggedOutAction} from "../redux/actions/logoutAction";
import {connect} from "react-redux";

class NavBarAfterLogin extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      
    };
  
    this.signOut = this.signOut.bind(this);
  }

  signOut(){
    const { dispatch } = this.props;
    dispatch(userLoggedOutAction())
  }

  render() {
    if(this.props.isLoggedIn === false){
      return(<Redirect to ="/login"></Redirect>)
    }
        return (
            <>

             <Navbar>
    <Navbar.Header>
    <Link to="/login">
      {/* <a href="www.google.com" className="navbar-brand logo"> */}
        <img src={Logo} alt="Logo" title="Company Logo"/>
      {/* </a> */}
      </Link>
    </Navbar.Header>
    <Navbar.Body>
    
    
    
    <Nav className="afterLoginMenu">
       <NavItem  className="ImgLogoIcon" >
       <Link to="/home"><img src={homeicon} alt="Logo" title="Home" className="navbar-homeicon"/></Link>
         </NavItem> 
         <NavItem>
         <Link to="/home"><img src={searchicon} alt="Logo" title="Search"/></Link>
         </NavItem> 
         <NavItem></NavItem>

    

        <Dropdown title="What do you want to do?" className="MenuShow" >
       
<Row className="MenuDrop">
  <Col md={12} sm={24}>
  <p className="DropDownShow"><b>Create:</b></p>
 
  <li className="rs-dropdown-item" title="Single Email"><Link to="/createemail" className="rs-dropdown-item-content">Single Email</Link></li>
<li className="rs-dropdown-item" title="Single Digital Media">
  <a href="/createcampaign" className="rs-dropdown-item-content" tabIndex="-2">Single Digital Media</a>
  </li>
<li className="rs-dropdown-item" title="Single Social">
  <a href="/createcampaign" className="rs-dropdown-item-content" tabIndex="-3">Single Social</a>
  </li>
<li className="rs-dropdown-item" title="Single Mail">
  <a href="/createcampaign" className="rs-dropdown-item-content" tabIndex="-4">Single Mail</a>
  </li>
<li className="rs-dropdown-item" title="Single SMS/Text">
  <a href="/createcampaign" className="rs-dropdown-item-content" tabIndex="-5">Single SMS/Text</a>
  </li>
<li className="rs-dropdown-item" title="Create Campaign">
  <a href="/createcampaign" className="rs-dropdown-item-content" tabIndex="-6">Create Campaign</a>
 </li>

  </Col>
  <Col md={12} sm={24}>
  <p className="DropDownShow"><b>View:</b></p>
<li className="rs-dropdown-item" title="Campaigns and Assets"><a href="/createcampaign" className="rs-dropdown-item-content" tabIndex="-7">Campaigns and Assets</a></li>
<li className="rs-dropdown-item" title="Asset Library"><Link to="/AssetLibrary/template/email" className="rs-dropdown-item-content">Asset Library</Link></li>
<li className="rs-dropdown-item"><Link to="/billing" className="rs-dropdown-item-content">Billing</Link></li>
<li className="rs-dropdown-item" title="Data and Audience Sets">  <Link to="/billing" className="rs-dropdown-item-content">Data and Audience Sets</Link></li>
<li className="rs-dropdown-item" title="Reporting"><Link to="/report" className="rs-dropdown-item-content">Reporting</Link></li>
<li className="rs-dropdown-item">&nbsp;&nbsp;&nbsp;&nbsp;</li>
  </Col>
  </Row>

          
        </Dropdown>
      
      </Nav>
      <Nav pullRight>
      <Nav.Item ><Icon icon ="user-circle" size="2x" style={{fontSize: 20, marginRight: -14}}/></Nav.Item>
          <Dropdown title="Hi Stephanie">
          <Link to="/AccountManagement"><Dropdown.Item>Account Information</Dropdown.Item></Link>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
          <Dropdown.Item onClick={this.signOut}>Log Out</Dropdown.Item>
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
function mapStateToProps(state) {

  const { isLoggedIn } = state.userLoggedIn;
  return {
    isLoggedIn
  }
}
export default connect(mapStateToProps)(NavBarAfterLogin) ;
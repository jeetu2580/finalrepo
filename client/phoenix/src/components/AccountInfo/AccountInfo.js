import React, { Component } from 'react'
import {Row,Col,Button, Panel, Content, Container, Sidebar} from 'rsuite';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';
import { NavLink} from "react-router-dom";
import profilepic from "./assets/image/profilepic.png";

import "./assets/css/AccountInfo.css"; 

export default class AccountInfo extends Component {
    render() {
       
      
        return (
            <>
            <NavBarAfterLogin />
<Container className="ContainerEmailCreate">
<Sidebar>
    <div className="SideNavPanel">
<Panel header="Account Information" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="User Management" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="Franchise Information" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="Order History" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="Notifications" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>
</div>

</Sidebar>

<Content>
<Row style={{background: "#ffffff", padding: 20, paddingBottom:5, borderLeft:"1px solid #373737", borderTop: "none"}}>
<Col md={2} sm={1}>
</Col>
<Col md={20} sm={20}>
<h5>Account Information<br /><br /></h5>

<NavLink to="/AccountInfoEdit"><Button style={{padding:0}} appearance="link" >Edit Information<br/><br/></Button></NavLink>
<Row>
    <Col md={12} sm={12}>
<b>Account Name</b><br/>
Stephanie Doe
<br/><br/>
<b>Account ID</b><br/>
12345678
<br/><br/>
<b>Password</b><br/>
***********
<br/><br/>
<b>Email</b><br/>
stephaniedoe@genericlogo.com
<br/><br/>
<b>Phone Number</b><br/>
(123) 456-7890
<br/><br/>
<b>Company Name</b><br/>
Generic Logo Company
<br/><br/>
<b>Company Address</b><br/>
123 AnyStreet Dr<br />
Any City, Any State<br />
12345
    </Col>
    <Col md={12} sm={12}>
<div style={{width: 280, height:475, textAlign:'center'}}>
        <img src={profilepic} alt="" style={{width: 190, marginTop: 25}}/>
      
        </div>
    </Col>
    </Row>
</Col>
<Col md={2} sm={1}>
</Col>
</Row>

<Row>
    <Col md={24}><br /><br /><br /></Col>
    </Row>

</Content>

</Container> 
           </>
        )
    }
}

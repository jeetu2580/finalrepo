import React, { Component } from 'react'
import {Row,Col,Button, Panel, Content, Container, Sidebar, Uploader, Input, FormGroup, Form, ButtonToolbar, SelectPicker, ControlLabel, FormControl} from 'rsuite';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';
import { NavLink} from "react-router-dom";
import {data} from "./StateName";
import profilepic from "./assets/image/profilepic.png";

import "./assets/css/AccountInfo.css"; 
function TextField(props) {
  const { name, label, accepter, data, ...rest } = props;
  
  return (
    <FormGroup>
      <ControlLabel>{label} </ControlLabel>
      <FormControl name={name} accepter={accepter} {...rest} data={data}/>
    </FormGroup>
  );
}

export default class AccountInfoEdit extends Component {
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

<NavLink to="/AccountInfo"><Button style={{padding:0}} appearance="link">Cancel<br/><br/></Button></NavLink>
<Row>
    <Col md={12} sm={24} className='AccInfoEdit'>
    <Form>
<TextField name="username" label="Account Name" accepter={Input}/>

<TextField name="accountID" label="Account ID" accepter={Input}/>

<TextField name="password" label="Password" type="password" accepter={Input} autoComplete="off"/>
<TextField name="email" label="Email" accepter={Input} type="email"/>
<TextField name="phoneNo" label="Phone Number" accepter={Input}/>
<TextField name="companyname" label="Company Name" accepter={Input}/>
<TextField name="city" label="City" accepter={Input}/>
<TextField name="state" label="State" className="statePicker" accepter={SelectPicker} data={data} style={{width:300, outline:"none !important", border: "0px"}}/>
<TextField name="pincode" label="Pin Code" accepter={Input}/>




</Form>
    </Col>
    <Col md={12} sm={24}>
<div style={{width: 280, height:475, textAlign:'center'}}>
        <img src={profilepic} alt="" style={{width: 190, marginTop: 25}}/>
        <br/>
        <br/>
        <br/>
        <Button style={{padding:0, marginLeft:"37%"}} appearance="link">Upload Media<br/><br/></Button>
        <Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
      <div style={{display:"inline-block", border: "2px dashed #000", width:190, height:190, paddingTop:75}}>Drop image here, or click <br/> to select files to upload.</div>
    </Uploader>
        
        </div>
        
    </Col>
    </Row>
    <Row>
<Col md={24} sm={24}>
<ButtonToolbar>
<NavLink to="/AccountInfo" title="Save">
<Button className="AccUpdateButton" >Save Updates</Button></NavLink>
</ButtonToolbar>
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

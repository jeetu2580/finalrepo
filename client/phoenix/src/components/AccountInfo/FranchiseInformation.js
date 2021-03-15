import React, { Component } from 'react'
import {Row,Col,Content, Checkbox} from 'rsuite';
import profilepic from "./assets/image/profilepic.png";

import "./assets/css/AccountInfo.css"; 

export default class FranchiseInformation extends Component {
    render() {
       
      
        return (
            <>
            

<Content>
<Row style={{background: "#ffffff", padding: 20, paddingBottom:5, borderLeft:"1px solid #373737", borderTop: "none"}}>
<Col md={2} sm={1}>
</Col>
<Col md={20} sm={20}>
<h5>Franchise Information<br /><br /></h5>

<p style={{marginBottom:"20px"}}>You do not have access to edit this information. Please contact your administrator for assistance.</p>
<Row>
    <Col md={8} sm={24}>
<b>Name</b><br/>
Stephanie Doe
<br/><br/>
<b>Company ID</b><br/>
12345
<br/><br/>
<b>Company Manager</b><br/>
Joe Bob Flanigan<br/>
(000) 999-9999<br/>
jbflanigan@genericlogo.com
<br/><br/>
<b>Company Location</b><br/>
123 Any Street<br/>
123 Any Street<br/>
12345
<br/><br/>

    </Col>
    <Col md={16} sm={24}>
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

 
           </>
        )
    }
}

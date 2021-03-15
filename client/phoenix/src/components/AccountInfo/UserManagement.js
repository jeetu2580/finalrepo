import React, { Component } from 'react'
import {Row,Col,Content, Checkbox} from 'rsuite';

import "./assets/css/AccountInfo.css"; 

export default class UserManagement extends Component {
    render() {
       
      
        return (
            <>
            

<Content>
<Row style={{background: "#ffffff", padding: 20, paddingBottom:5, borderLeft:"1px solid #373737", borderTop: "none"}}>
<Col md={2} sm={1}>
</Col>
<Col md={20} sm={20}>
<h5>User Management<br /><br /></h5>

<p style={{marginBottom:"20px"}}>You do not have access to edit this information. Please contact your administrator for assistance.</p>
<Row>
    <Col md={8} sm={24}>
<b>Account Name</b><br/>
Stephanie Doe
<br/><br/>
<b>Account ID</b><br/>
12345678
<br/><br/>
<b>Role</b><br/>
Lead Lorem Ipsum
<br/><br/>
<b>Role Access</b><br/>
Standard
<br/><br/>
<b>Status</b><br/>
Active
<br/><br/>
<b>Email</b><br/>
stephaniedoe@genericlogo.com
<br/><br/>

    </Col>
    <Col md={16} sm={24}>
        <b>Access Type</b>
        
<table className="AccesType" border="1">
<tr>
    <th>Campaign Type</th>
    <th>Access Type</th>
    </tr>
<tr><td className="sideTD">Email</td><td><table><tr><td><Checkbox readOnly>View</Checkbox></td><td><Checkbox readOnly>Edit</Checkbox></td><td><Checkbox readOnly>Create</Checkbox></td><td><Checkbox>Send</Checkbox></td></tr></table></td></tr>
<tr><td className="sideTD">Direct Mail</td><td><table><tr><td><Checkbox>View</Checkbox></td><td><Checkbox>Edit</Checkbox></td><td><Checkbox>Create</Checkbox></td><td><Checkbox checked>Send</Checkbox></td></tr></table></td></tr>
<tr><td className="sideTD">Digital Media</td><td><table><tr><td><Checkbox>View</Checkbox></td><td><Checkbox>Edit</Checkbox></td><td><Checkbox>Create</Checkbox></td><td><Checkbox>Send</Checkbox></td></tr></table></td></tr>
<tr><td className="sideTD">Social</td><td><table><tr><td><Checkbox>View</Checkbox></td><td><Checkbox>Edit</Checkbox></td><td><Checkbox>Create</Checkbox></td><td><Checkbox>Send</Checkbox></td></tr></table></td></tr>
<tr><td className="sideTD">SMS</td><td><table><tr><td><Checkbox>View</Checkbox></td><td><Checkbox>Edit</Checkbox></td><td><Checkbox>Create</Checkbox></td><td><Checkbox>Send</Checkbox></td></tr></table></td></tr>
<tr><th colspan="2" style={{textAlign:"left"}}>Other</th></tr>
<tr><td className="sideTD">Asset Library</td><td><table><tr><td><Checkbox>View</Checkbox></td><td><Checkbox>Edit</Checkbox></td><td><Checkbox>Create</Checkbox></td><td><Checkbox>Send</Checkbox></td></tr></table></td></tr>
</table>
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

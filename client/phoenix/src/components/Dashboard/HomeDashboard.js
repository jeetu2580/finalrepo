import React, { Component } from 'react'
import {Content,  Grid, Row, Col, ButtonToolbar, Button} from 'rsuite';
import EmailOverview from './Email/EmailOverview'
import SocialOverview from './Social/SocialOverview';
import emailLogo from './assets/campaign/email.svg';
import dgLogo from './assets/campaign/brochure-deselected.svg';
import socialLogo from './assets/campaign/social-deselected.svg';
import mailLogo from './assets/campaign/mail-deselected.svg';
import smsLogo from './assets/campaign/sms-deselected.svg';
import './assets/css/Dashboard.css';

export default class HomeDashboard extends Component {

    constructor(props)
    {
          super(props);
          this.state = {
                reportType: "Email"
          }
    this.changeDashboardActivity = this.changeDashboardActivity.bind(this);
    }

    
/* Start function to change Dashboard Activity in home page */
changeDashboardActivity(e)
{
    
this.setState({
      reportType: e
});
}
/* End function to change Dashboard Activity in home page */


    render() {
        return (
            <div>
                
                <Content>
         <br />
         <Row>
             <Col md={2} sm={12}></Col>
             <Col md={20} sm={12}>
        <h5>YOUR DASHBOARD</h5>
        <p style={{lineHeight:3}}>Select a section to see latest stats.</p></Col>
        <Col md={2} sm={12}></Col>
        </Row>
        <Row>
        <Col md={2} sm={12}></Col>
        <Col md={20} sm={12}>
        <ButtonToolbar>
<Button className="HouseDashbutton">View Reports</Button>
</ButtonToolbar></Col>
<Col md={2} sm={12}></Col></Row>
      
      <div className="dashboard">
      <Grid fluid>
      <Row>
      <Col md={2} sm={12}></Col>
      <Col xs={4} md={5}>
      <table cellpadding="10" cellSpacing="10" className="selectAcamp" >
<tr>
<td title="Email" className="DigitalReport"><img onClick={(e) => this.changeDashboardActivity("Email")} src={emailLogo} alt="React Logo" /> &nbsp;&nbsp;<b>Email</b></td>

</tr>
 <tr>
<td title="Digital Media" className="DigitalReport"><img onClick={(e) => this.changeDashboardActivity("Digital")} src={dgLogo} alt="React Logo" /> &nbsp;&nbsp;<b>Digital Media</b></td>
<td></td>
</tr>
<tr>
<td title="Social" className="DigitalReport"><img onClick={(e) => this.changeDashboardActivity("Social")} src={socialLogo} alt="React Logo" /> &nbsp;&nbsp;<b>Social</b></td>

</tr>
<tr>
<td title="Direct Mail" className="DigitalReport"><img onClick={(e) => this.changeDashboardActivity("Direct")} src={mailLogo} alt="React Logo" /> &nbsp;&nbsp;<b>Direct Mail</b></td>

</tr>
<tr>
<td title="SMS/Text" className="DigitalReport"> <img src={smsLogo} alt="React Logo"  /> &nbsp;&nbsp;<b>SMS/Text</b></td>

</tr> 
</table>
{/* 
<ul>
<li title="Email: Overview" className="SelectorDashboard active" onClick={(e) => this.changeDashboardActivity("Email")}>
Email
</li>
<li title="Social: Overview" className="SelectorDashboard inactive" onClick={(e) => this.changeDashboardActivity("Social")}>
<img src={dgLogo} alt="React Logo" /></li>
<li title="Digital: Overview" className="SelectorDashboard inactive" onClick={(e) => this.changeDashboardActivity("Digital")}>
<img src={socialLogo} alt="React Logo" /></li>
<li title="Direct Mail: Overview" className="SelectorDashboard inactive" onClick={(e) => this.changeDashboardActivity("Direct")}>
<img src={mailLogo} alt="React Logo" /></li>
<li title="Direct Mail: Overview" className="SelectorDashboard inactive" onClick={(e) => this.changeDashboardActivity("Direct")}>
<img src={smsLogo} alt="React Logo" /></li>
</ul> */}
</Col>
<Col xs={16} md={15}>

{/* Start changing Dashboard Home Activity Using State  {reportType} */}
{this.state.reportType === "Email" && <EmailOverview />}

{this.state.reportType === "Social" && <SocialOverview />}


{/* End changing Dashboard Home Activity Using State  {reportType}*/}

</Col>
     
<Col md={2} sm={12}></Col>
</Row>
</Grid>
      </div>
<Row>
    <Col md={2} sm={12}></Col>
    <Col md={5} sm={12}>
      <div className="OuterDivDash"><b>Sessions</b></div>
      </Col>
      <Col md={5} sm={12}>
      <div className="OuterDivDash"><b>Avg. Sessions</b></div>
      </Col>
      <Col md={5} sm={12}>
      <div className="OuterDivDash"><b>Bounce Rate</b></div>
      </Col>
      <Col md={5} sm={12}>
      <div className="OuterDivDash"><b>Conversion</b></div>
      </Col>
      <Col md={2} sm={12}></Col>
      </Row>
      </Content>
            </div>
        )
    }
}

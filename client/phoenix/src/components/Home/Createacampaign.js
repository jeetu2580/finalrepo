import React, { Component } from 'react'
import './assets/css/home.css';
import {  Row, Col, ButtonToolbar, Button} from 'rsuite';
import emailLogo from './assets/campaign/email-deselected.svg';
import dgLogo from './assets/campaign/brochure-deselected.svg';
import socialLogo from './assets/campaign/social-deselected.svg';
import mailLogo from './assets/campaign/mail-deselected.svg';
import smsLogo from './assets/campaign/sms-deselected.svg';
export default class Createacampaign extends Component {
    render() {
        return (
            <div>
              <br/>
              <br/>
              <br/>
              <Row>
                <Col md={1} sm={24}></Col>
                <Col md={22} sm={24}>
                <Row>
                <h5>CREATE A CAMPAIGN</h5>
                <p className="HeaderParagraph">Would you like to create a campaign using multiple assets? Select the assets you would like to add to your campaign below.</p>
                </Row>
                
                
                
<Row className="center">

<Col md={3} sm={12}><div title="Email" className="DigitalReport"><img src={emailLogo} alt="React Logo" /><p style={{marginTop:"5px"}}><b>Email</b></p></div></Col>
<Col md={3} sm={12}><div title="Digital" className="DigitalReport"><img src={dgLogo} alt="React Logo"/><p style={{marginTop:"5px"}}><b>Digital</b></p></div></Col>
<Col md={3} sm={12}><div title="Social" className="DigitalReport"><img src={socialLogo} alt="React Logo" /><p style={{marginTop:"5px"}}><b>Social</b></p></div></Col>
<Col md={3} sm={12}><div title="Mail" className="DigitalReport"><img src={mailLogo} alt="React Logo" /><p style={{marginTop:"5px"}}><b>Mail</b></p></div></Col>
<Col md={3} sm={12}><div title="Text" className="DigitalReport"><img src={smsLogo} alt="React Logo" /><p style={{marginTop:"5px"}}><b>Text</b></p></div></Col>

<Col md={9} sm={24}>
<Row style={{textAlign:"center"}}>
<Col md={4} sm={8}>
<ButtonToolbar>
<Button className="buttonn" type="submit">
          Create Campaign
        </Button>
      </ButtonToolbar>
      </Col>

      <Col md={1} sm={4}>
      <div className="vl"></div>
      </Col>
      
<Col md={4} sm={8}>

<ButtonToolbar>
        <Button className="buttonnn">
          View/Edit Campaigns
        </Button>
      </ButtonToolbar>

</Col>

</Row>
</Col>

</Row>
</Col>
<Col md={1} sm={1}></Col>
</Row>
<hr/>
</div>
        )
    }
}

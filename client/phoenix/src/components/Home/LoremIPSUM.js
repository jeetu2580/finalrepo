import React, { Component } from 'react';
import emailimg from './assets/images/email-demo.png';
import dmimg from './assets/images/digital-demo.png';
import smimg from './assets/images/social-demo.png';
import dmailimg from './assets/images/mail-demo.png';
import smsimg from './assets/images/sms-demo.png';
import {Row, Col, ButtonToolbar, Button, Form, FormGroup, FormControl} from 'rsuite';
export default class LoremIPSUM extends Component {
    render() {
        return (
            <div>
                <br/>
                <Row>
                    <Col md={2} sm={2}></Col>
                    <Col md={20} sm={20}>
                <h5>WELCOME!</h5>
       <hr/>
                <h5>LOREM IPSUM</h5>
                <br />
                <p>What would like to explore?</p>
                </Col>
                <Col md={2} sm={2}></Col>
                </Row>
                <br />
                
                <Row>
                <Col md={2} sm={2}></Col>
    <Col md={4} sm={12}>
   <div className="OuterDivCreateStation">

<img src={emailimg} alt="" className="imgsrc"/>
<ButtonToolbar>
<Button className="CreateStationbutton">Campaigns</Button>
</ButtonToolbar>
 </div>
    </Col>
    <Col md={4} sm={12}>
    <div className="OuterDivCreateStation">

<img src={dmimg} alt="" className="imgsrc"/>
<ButtonToolbar>
<Button className="CreateStationbutton">Assets</Button>
</ButtonToolbar>
 </div>
    </Col>
    <Col md={4} sm={12}>
    <div className="OuterDivCreateStation">

<img src={smimg} alt="" className="imgsrc"/>
<ButtonToolbar>
<Button className="CreateStationbutton">Data Sets</Button>
</ButtonToolbar>
 </div>
    </Col>
    <Col md={4} sm={12}>
    <div className="OuterDivCreateStation">

<img src={dmailimg} alt="" className="imgsrc"/>
<ButtonToolbar>
<Button className="CreateStationbutton">Reporting</Button>
</ButtonToolbar>
 </div>
    </Col>
    <Col md={4} sm={12}>
    <div className="OuterDivCreateStation">

<img src={smsimg} alt="" className="imgsrc"/>
<ButtonToolbar>
<Button className="CreateStationbutton">Billing</Button>
</ButtonToolbar>
 </div>
    </Col>
    <Col md={2} sm={2}></Col>
  </Row>
            </div>
        )
    }
}

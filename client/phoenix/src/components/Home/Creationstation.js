import React, { Component } from 'react'
import {Row, Col, ButtonToolbar, Button} from 'rsuite';
import { Link} from "react-router-dom";
import './assets/css/home.css';
import emailimg from './assets/images/email-demo.png';
import dmimg from './assets/images/digital-demo.png';
import smimg from './assets/images/social-demo.png';
import dmailimg from './assets/images/mail-demo.png';
import smsimg from './assets/images/sms-demo.png';
export default class Creationstation extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={1} sm={12}></Col>
                    <Col md={22} sm={24}>
                <Row>
                <h5>WELCOME!</h5>
       <hr/>
                <h5>CREATION STATION</h5>
                <p className="HeaderParagraph">What do you want to create today?</p>
                </Row>
              
                <Row >
<Col md={4} sm={11} className="DeckImages">
<div className="OuterDivCreateStation">
<img src={emailimg} alt="" className="imgsrc"/>
<ButtonToolbar>
    <Link to="/createemail" title="Create Email">
<Button className="CreateStationbutton">Email</Button></Link>
</ButtonToolbar>
</div>
</Col>

<Col md={4} sm={11}  className="DeckImages">
<div className="OuterDivCreateStation">
<img src={dmimg} alt="" className="imgsrc"/>
<ButtonToolbar title="Create Digital Media">
<Button className="CreateStationbutton">Digital Media</Button>
</ButtonToolbar>
</div>
</Col>

<Col md={4} sm={11}  className="DeckImages">
<div className="OuterDivCreateStation">
<img src={smimg} alt="" className="imgsrc"/>
<ButtonToolbar title="Create Social Media">
<Button className="CreateStationbutton">Social Media</Button>
</ButtonToolbar>
</div>
</Col>

<Col md={4} sm={11}  className="DeckImages">
<div className="OuterDivCreateStation">
<img src={dmailimg} alt="" className="imgsrc"/>
<ButtonToolbar title="Create Direct Email">
<Button className="CreateStationbutton">Direct Mail</Button>
</ButtonToolbar>
</div>
</Col>

<Col md={4} sm={11}  className="DeckImages">
<div className="OuterDivCreateStation">
<img src={smsimg} alt="" className="imgsrc"/>
<ButtonToolbar title="Create SMS/Text">
<Button className="CreateStationbutton">SMS/Text</Button>
</ButtonToolbar>
</div>
</Col>
  </Row>

  </Col>
  <Col md={1} sm={12}></Col>
  </Row>
                
            </div>
        )
    }
}

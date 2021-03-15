import React, { Component } from 'react'
import {Button, Row, Col, Panel} from 'rsuite';
import {Link} from 'react-router-dom'
import "./assets/css/Templateemail.css"; 

export default class Templateemail extends Component {
    render() {
        return (
            <div>
                <Row>
        <Col md={2} sm={24}></Col>
<Row>
    <Col md={20} sm={24}>
        <Link to="/AssetLibrary/createtemplate" title="Create Template">      
<Button className="Templateemailbtn">Create Template</Button></Link>
</Col>
</Row>
<hr/>
<Row>
<Col md={2} sm={24}></Col>
    <Col md={20} sm={24}>
<h5>Recent Uploads</h5>
      <br/>
                <h5>Email - Basic</h5>
    </Col>
    <Col md={2} sm={24}></Col>
    </Row>
    <Row>
<Col md={2} sm={24}></Col>
<Col md={4} sm={24}>
<Panel shaded bordered bodyFill style={{marginRight:"100px",  display: 'inline-block', width: 240 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header="RSUITE">
      <p>
        <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
      </p>
    </Panel>
  </Panel>

</Col>
<Col md={4} sm={24}>
<Panel shaded bordered bodyFill style={{marginLeft:"100px", display: 'inline-block', width: 240 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header="RSUITE">
      <p>
        <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
      </p>
    </Panel>
  </Panel>

</Col>
<Col md={4} sm={24}>
<Panel shaded bordered bodyFill style={{marginLeft:"200px", display: 'inline-block', width: 240 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header="RSUITE">
      <p>
        <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
      </p>
    </Panel>
  </Panel>

</Col>

<Col md={2} sm={24}></Col>


    </Row>
    <hr/>
       
                <Col md={2} sm={24}></Col>
                </Row>
            </div>
        )
    }
}

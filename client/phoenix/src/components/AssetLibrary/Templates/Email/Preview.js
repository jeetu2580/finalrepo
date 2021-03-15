import React, { Component } from 'react';
import {connect} from "react-redux";
import {Row,Col, Container} from 'rsuite';

class Preview extends Component {
    constructor(props){
        super(props);

       
    }
   
  
    render(){

        
        return (<> <Container className="ContainerEmailCreate"><Row>
            
            <Col md={4}></Col>
            <Col md={16}><div style={{width:600, margin:'auto', marginTop:20}} dangerouslySetInnerHTML  = {{__html: this.props.html}}></div></Col>
            <Col md={4}></Col>
            </Row></Container></>)

     

    }
}

function mapStateToProps(state){
    const {html} = state.emailPropertiesreducer;
    return{
        html
    }
}
export default connect(mapStateToProps)(Preview);
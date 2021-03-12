import React, { Component } from 'react';
import {connect} from "react-redux";
import {Row,Col, Container} from 'rsuite';
import {saveDesignnHtmlAction} from "../../redux/actions/saveDesignnHtmlAction"

class Preview extends Component {
    constructor(props){
        super(props);
        this.saveDesignnHtml =this.saveDesignnHtml.bind(this);
        this.props.setClick(this.saveDesignnHtml);
}

saveDesignnHtml(){
  const {dispatch} = this.props;
  dispatch(saveDesignnHtmlAction(this.props.formValues,this.props.html,this.props.design))
}
   
  
    render(){

        
        return (<> <Container className="ContainerEmailCreate"><Row>
            
            <Col md={4}></Col>
            <Col md={16}><div style={{width:600, margin:'auto', marginTop:20,marginBottom:70}} dangerouslySetInnerHTML  = {{__html: this.props.html}}></div></Col>
            <Col md={4}></Col>
            </Row></Container></>)

     

    }
}

function mapStateToProps(state){
    const {html,formValues,design} = state.emailPropertiesreducer;
    return{
        html,formValues,design
    }
}
export default connect(mapStateToProps)(Preview);
import React, { Component } from 'react'
import {Row,Col,Button, Panel, Content, Container, Sidebar} from 'rsuite';
import EmailEditor from 'react-email-editor';
import {connect} from "react-redux";
import './assets/css/CreateEmail.css';

// const Loading =()=>
//   <div className="loading">
//     <div></div>
//     <div></div>
//   </div>  

class StepTwoCustomize extends Component {
  constructor(props){
    super(props);
   this.state={
     loading:true
   }
    this.getAlert =this.getAlert.bind(this);
    this.props.setClick(this.getAlert);
    this.onLoadDesign = this.onLoadDesign.bind(this);
  }
 
   
 getAlert() {
    this.editor.exportHtml( data => {
      const { html ,design} = data;
     
      this.props.dispatch(({
        type: "SET_EMAIL_HTML",
        payloadh: html,
        payloadd:design
      }))
     this.props.parentMethod()
   })

 
   
}

 onLoadDesign = () => {
this.setState({loading:false})
  
  if(this.props.design !=="" ){
    var templateJson = this.props.design
    if(this.editor!==undefined)
    {
      
       setTimeout(() => {
           this.editor.loadDesign(templateJson);
         });
      
  }
  else{
      setTimeout(() => {
       this.onLoadDesign()
     });
  }
    
  }
  
};


    render() {
      return (
            <>
<Container className="ContainerEmailCreate">
<Sidebar>
{this.props.formValues.methodEmail==="Template" && <><div style={{height: 50, paddingTop: 15, paddingLeft: 15}}>
    <span className="boldText">Template Name:</span> <span className="smallfontSize">{this.props.formValues.methodEmail}</span> </div>
</>}
    <div className="SideNavPanel">
<Panel header="Text Module" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="Image Module" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>
</div>

</Sidebar>
<div className="EmailEditorContainer">
<Content>
<Row style={{background: "#ffffff", padding: 20, paddingBottom:5, border: "1px solid #d9d9d9", borderTop: "none"}}>
<p><span className="boldText">Subject:</span> {this.props.formValues.subject}</p>
<p><span className="boldText">Subheader:</span> {this.props.formValues.preheader}</p>
<br />
</Row>

<Row style={{border: "1px solid #d9d9d9", background: "#efefef", borderTop: "none"}}>
    <Col md={24}>
{/* Email Editor */}
{/* <button onClick={this.addHTML}>Export HTML</button> */}

<EmailEditor 
                ref={editor => this.editor = editor} className="EditorEmail" onLoad={this.onLoadDesign}
                />
{/* Email Editor */}
    </Col>
  </Row>

</Content>
</div>
</Container> 
           </>
        )
    }
}
function mapStateToProps (state){
  const {formValues,design} = state.emailPropertiesreducer;
  return{
    formValues,
    design
  }
  }

  export default connect(mapStateToProps)(StepTwoCustomize) 
import React, { Component } from 'react'
import {Row,Col} from 'rsuite';
import editorcode from './assets/image/icon-editor-code.svg';
import editordnd from './assets/image/icon-editor-dnd.svg';
 class EmailCreationMethod extends Component {
  

    constructor(props)
    {
        super(props);

        this.state = {
            setEditorType: 'design'
        }
this.selectTool = this.selectTool.bind(this);
    }

    selectTool =(e) =>
    { 

        this.setState({
           
        });
    } 


    render() {


        

        return (
            <div>
                <Row>
                    <Col md={1} sm={1}></Col>
                    <Col md={22} sm={24}>
                   
                <Row>
                    <Col md={22} sm={24}>

                <div className="EmailCmail">
                    <h6>Select your editing experience</h6>
                    <p>You can choose to create a Template using our design editor or by adding your HTML to our code editor.</p>


                </div>
                </Col>
                </Row>
               


               
                <Row style={{textAlign:"center", marginTop: 30, marginBottom: 100}} className="TemplateList1">
               <Col md={4} sm={2}></Col>
                    <Col md={6} sm={2}> <input type="radio" id="myCheckbox1" name="teamplateID"  onClick={this.selectTool.bind(this,
    "Designer")}/>
              <label for="myCheckbox1">
             <img src={editordnd} alt="Email Designer"/>
                    
                        <h6>Design Editor</h6>
                        <p><br />Select modules like text blocks or images and use drag & drop or WYSIWYG design tools. You can also edit HTML of individual</p>

              </label></Col>
                
                  
   
                        <Col md={2} sm={2}></Col>
                        <Col md={6} sm={2}> <input type="radio" id="myCheckbox2" name="teamplateID"  onClick={this.selectTool.bind(this,
    "Code")}/>
              <label for="myCheckbox2">
              <img src={editorcode} alt="Code Editor"/>
                        <h6>Code Editor</h6>
                    <p><br />Add HTML edit the code of your enditre email and rerview content in the visual preview tab. The code editor does not offer any</p>

              </label></Col>
                    <Col md={6} sm={2}></Col>
                 
                </Row>
               
                <br/>
            
                </Col>
                <Col md={1} sm={1}></Col>
                </Row>
             
            </div>
        )
    }
}

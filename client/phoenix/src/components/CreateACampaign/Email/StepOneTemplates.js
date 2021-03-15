import React, { Component } from 'react'
import {Row, InputGroup, Input, Icon, Col,Button, Schema, Panel, Content, Container, Sidebar, Form} from 'rsuite';



export default class StepOneTemplates extends Component {
    render() {
        const { StringType } = Schema.Types;
        const model = Schema.Model({
          subjectLine: StringType().isRequired('This field is required.')
           /*Email validation */
  
          
        });
      
        return (
            <>
<Container className="ContainerEmailCreate">
<Sidebar>
    <div className="SideNavPanel">
<Panel header="PreSelected Templates" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="Saved Drafts" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>
</div>

</Sidebar>

<Content>
<Row style={{background: "#ffffff", padding: 20, paddingBottom:5, border: "1px solid #d9d9d9", borderTop: "none"}}>
<Form fluid model={model}>
<Col md={10}></Col>
<Col md={14}>
<InputGroup >
    <Input className="searchInput" placeholder="Search Template"/>
    <InputGroup.Addon>
      <Icon icon="search" />
    </InputGroup.Addon>
  </InputGroup>
               <br />
</Col>


                </Form> 
</Row>

<Row style={{border: "1px solid #d9d9d9", background: "#efefef", borderTop: "none"}} className="TemplateList">
    <Col md={8} sm={12}>
   
    <input type="radio" id="myCheckbox1" name="teamplateID"/>
              <label htmlFor="myCheckbox1"><img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/9386/final_image/final-html-email-template.png" alt="template" style={{width: 300}}/>
              </label>
    </Col>
    <Col md={8} sm={12}>
    <input type="radio" id="myCheckbox2" name="teamplateID"/>
    
              <label for="myCheckbox2"><img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/9386/final_image/final-html-email-template.png" alt="template" style={{width: 300}}/>
              </label>
    </Col>
    <Col md={8} sm={12}>
       <input type="radio" id="myCheckbox3" name="teamplateID"/>
       
              <label for="myCheckbox3"><img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/9386/final_image/final-html-email-template.png" alt="template" style={{width: 300}}/>
              </label>
    </Col>
    <Col md={8} sm={12}>
   
   <input type="radio" id="myCheckbox4" name="teamplateID"/>
             <label for="myCheckbox4"><img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/9386/final_image/final-html-email-template.png" alt="template" style={{width: 300}}/>
             </label>
   </Col>
   <Col md={8} sm={12}>
   
   <input type="radio" id="myCheckbox5" name="teamplateID"/>
             <label for="myCheckbox5"><img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/9386/final_image/final-html-email-template.png" alt="template" style={{width: 300}}/>
             </label>
   </Col>
   
 
  </Row>

</Content>

</Container> 
           </>
        )
    }
}

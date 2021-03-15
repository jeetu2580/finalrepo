import React, { Component } from 'react';
import axios from "axios";

import { Link} from "react-router-dom";
import { ButtonToolbar, Panel, Button, FlexboxGrid, Container, Content, Form, FormGroup, FormControl, ControlLabel, Schema, Alert} from 'rsuite';
import NavBarBeforeLogin from '../navbar/NavBarBeforeLogin';
import 'rsuite/dist/styles/rsuite-default.css';
import './assets/css/loginForm.css'


export default class ForgetPassword extends Component {
  
constructor(props)
{
  super(props);
  this.state = {
    checked: true,
    eyetitle: true,
    formValue: {
      email: '',
    
      },
    formError: {}
  };

  this.handleSubmit = this.handleSubmit.bind(this);
 
}

//axios request to server 
handleSubmit() {
  var email = this.state.formValue.email;
  
  
  if (this.form.check()) {
    axios.post("http://localhost:4000/ForgetPassword",{email})
      .then(function(res){
        console.log(res)
        
        if( res.status == 201){
          Alert.error(res.data.error)
        
          
      }

      if( res.status == 202){
        Alert.error(res.data[0].msg)
      
        
    }

      })
  }
}


 
 

    render() {
      const { formValue }= this.state
      const { StringType } = Schema.Types;
      const model = Schema.Model({
        email: StringType().isRequired('This field is required.').isEmail('Please enter a valid email.') /*Email validation */

        
      });

     

        return (
            <>

        {/* START navbar before login component */}

       <NavBarBeforeLogin />  
    
        {/* END navbar before login component*/}

  <div className="show-container">
  <Container>
    
  <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<span className="forgot-password">FORGOT PASSWORD</span>} bordered>
            <Form fluid model={model}ref={ref => (this.form = ref)}
          onChange={formValue => {
            this.setState({ formValue });
          }}
          
          formValue={this.state.formValue}>
                <FormGroup>
                  <ControlLabel className="enter-a-valid-email">Enter a valid email: </ControlLabel>
                  <FormControl name="email" type="text" className="newfields" id ="email"/>
                </FormGroup>
              
                



                <div className="backtologin"><Link to="/login"><Button appearance="link" title="Back to Log In"><span className="back-to-log-in">Back to Log In</span></Button></Link></div>
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={this.handleSubmit} className="loginbtn" title="Send Email" type="submit">Send Email</Button>
                  
                  </ButtonToolbar>
                </FormGroup>
                <div className="query"><b><span>Don't have an account? <Link to="/signup"><Button appearance="link" className="Signup" title="Sign Up"><b>Sign Up</b></Button></Link></span></b></div>


              </Form> 
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
    
    </div>
            </>
        )
    }
}

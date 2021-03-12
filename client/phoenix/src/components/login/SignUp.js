import React, { Component } from 'react';

import { Link} from "react-router-dom";
import {Checkbox, InputGroup,Tooltip, Whisper, Icon, ButtonToolbar, Panel, Button, FlexboxGrid, Container, Content, Form, FormGroup, FormControl, ControlLabel, Schema} from 'rsuite';
import NavBarBeforeLogin from '../navbar/NavBarBeforeLogin';
import 'rsuite/dist/styles/rsuite-default.css';
import './assets/css/loginForm.css'


export default class SignUp extends Component {

constructor(props)
{
  super(props);
  this.state = {
    checked: true,
    eyetitle: true
    
  };
  this.showpassword = this.showpassword.bind(this);
}

// START  Password type (hidden or show)

  showpassword = () =>{
    
var password = document.getElementById("password");


if (password.type === "password") {
  this.setState({
    checked: false,
    eyetitle: false
    });
 
  
  password.type = "text";
  
  
} else {
  password.type = "password";
  this.setState({
    checked: true,
    eyetitle: true,
    });

}

}
    
 // END  Password type (hidden or show)

    render() {
      const { StringType } = Schema.Types;
      const model = Schema.Model({
        username: StringType().isRequired('This field is required.'),
        email: StringType().isRequired('This field is required.').isEmail('Please enter an valid email.'),
        password: StringType().isRequired('This field is required.').pattern(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must Contain Number and special Character.'
        )

      });

      const showPassword = (
        <Tooltip>
          Show Password
        </Tooltip>
      );

      const hidePassword = (
        <Tooltip>
          Hide Password
        </Tooltip>
      );   

        return (
            <>
        {/* START navbar before login  Component*/} 

       <NavBarBeforeLogin />  
      
      {/* END navbar before login Component*/} 

  <div className="show-container">
  <Container>
    
  <Content className="signupcontainer">
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<span className="sign-up">SIGN UP</span>} bordered>
              <Form fluid  model={model}>
                <FormGroup>
                  <ControlLabel><b>Username</b><span className="required">*</span>: </ControlLabel>
                  <FormControl name="username" className="newfields"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel><b>Email</b><span className="required">*</span>: </ControlLabel>
                  <FormControl name="email" className="newfields"/>
                </FormGroup>
                <FormGroup>
                <ControlLabel><b>Password</b><span className="required">*</span>: </ControlLabel>
                <InputGroup inside>
                <FormControl name="password" type="password" className="newfields" id="password" autoComplete="off"/>
                  <InputGroup.Addon className="eye" onClick={this.showpassword}>
        
  <Whisper placement="top" trigger="hover" speaker={this.state.eyetitle ? showPassword : hidePassword}>
  <Icon icon = {this.state.checked ? 'eye' : 'eye-slash'}/>
    </Whisper>  
                  
            </InputGroup.Addon>
                       </InputGroup>
                      <span className="instructions"> Use 8 or more characters with a mix of letters, numbers, and symbols.</span>
                </FormGroup>
                <FormGroup className="disclaimer"><Checkbox> I agree to the <Link to="/login"><Button appearance="link" className="Signup" title="Terms"><b>Terms</b></Button></Link> and <Link to="/login"><Button appearance="link" className="Signup" title="Privacy Policy"><b>Privacy Policy</b></Button></Link>.<span className="required">*</span></Checkbox></FormGroup>
                


               
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary" className="loginbtn" title="Sign Up" type="submit">Sign Up</Button>
                  
                  </ButtonToolbar>
                </FormGroup>
                <div className="query"><b><span>Already have an account? <Link to="/login"><Button appearance="link" className="Signup" title="Log In"><b>Log In</b></Button></Link></span></b></div>

               
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

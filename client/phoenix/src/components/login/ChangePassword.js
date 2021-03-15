import React, { Component } from 'react';

// import { Link} from "react-router-dom";
import { ButtonToolbar, Panel, Button, Tooltip, FlexboxGrid, InputGroup,Icon, Whisper, Container, Content, Form, FormGroup, FormControl, ControlLabel, Schema} from 'rsuite';
import NavBarBeforeLogin from '../navbar/NavBarBeforeLogin';
import 'rsuite/dist/styles/rsuite-default.css';
import './assets/css/loginForm.css'


export default class ChangePassword extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        checked: true,
        eyetitle: true,
        checked1: true,
        eyetitle1: true
        
      };
      this.showpassword = this.showpassword.bind(this);
      this.showpassword1 = this.showpassword1.bind(this);
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


    
showpassword1 = () =>{
    
    var retypepassword = document.getElementById("retypepassword");
   
    
    if (retypepassword.type === "password") {
      this.setState({
        checked1: false,
        eyetitle1: false
        });
     
      
        retypepassword.type = "text";
      
      
    } else {
        retypepassword.type = "password";
      this.setState({
        checked1: true,
        eyetitle1: true,
        });
    
    }
    
    }
    
    render() {

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
    

      const { StringType } = Schema.Types;
      const model = Schema.Model({
        changepassowrd: StringType().isRequired('This field is required.').pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Must Contain Number and special Character.'
          ),
          retypepassword: Schema.Types.StringType().addRule((value, data) =>{
      
            if(value !== data.changepassowrd){
              
              return false;
            }
            return true; 
          }, 'The passwords are inconsitent twice')

        
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
            <Panel header={<span className="forgot-password">CHANGE PASSWORD</span>} bordered>
              <Form fluid model={model}>
              <FormGroup>
                <ControlLabel><b>Change Password</b><span className="required">*</span>: </ControlLabel>
                <InputGroup inside>
                <FormControl name="changepassowrd" type="password" className="newfields" id="password" autocomplete="off"/>
                  <InputGroup.Addon className="eye" onClick={this.showpassword}>
        
  <Whisper placement="top" trigger="hover" speaker={this.state.eyetitle ? showPassword : hidePassword}>
  <Icon icon = {this.state.checked ? 'eye' : 'eye-slash'}/>
    </Whisper>  
                  
            </InputGroup.Addon>
                       </InputGroup>
                      <span className="instructions"> Use 8 or more characters with a mix of letters, numbers, and symbols.</span>
                </FormGroup>
                <FormGroup>
                <ControlLabel><b>Retype Password</b><span className="required">*</span>: </ControlLabel>
                <InputGroup inside>
                <FormControl name="retypepassword" type="password" className="newfields" id="retypepassword" autoComplete="off"/>
                  <InputGroup.Addon className="eye" onClick={this.showpassword1}>
        
  <Whisper placement="top" trigger="hover" speaker={this.state.eyetitle1 ? showPassword : hidePassword}>
  <Icon icon = {this.state.checked1 ? 'eye' : 'eye-slash'}/>
    </Whisper>  
                  
            </InputGroup.Addon>
                       </InputGroup>
                      <span className="instructions"> Use 8 or more characters with a mix of letters, numbers, and symbols.</span>
                </FormGroup>


                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary" className="loginbtn" title="Change Password" type="submit">Change Password</Button>
                  
                  </ButtonToolbar>
                </FormGroup>
            


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

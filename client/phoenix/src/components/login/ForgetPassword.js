import React, { Component } from 'react';

import { Link} from "react-router-dom";
import { ButtonToolbar, Panel, Button, FlexboxGrid, Container, Content, Form, FormGroup, FormControl, ControlLabel, Schema} from 'rsuite';
import NavBarBeforeLogin from '../navbar/NavBarBeforeLogin';
import 'rsuite/dist/styles/rsuite-default.css';
import './assets/css/loginForm.css'


export default class ForgetPassword extends Component {



 
 

    render() {
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
              <Form fluid model={model}>
                <FormGroup>
                  <ControlLabel className="enter-a-valid-email">Enter a valid email: </ControlLabel>
                  <FormControl name="email" type="text" className="newfields"/>
                </FormGroup>
              
                



                <div className="backtologin"><Link to="/login"><Button appearance="link" title="Back to Log In"><span className="back-to-log-in">Back to Log In</span></Button></Link></div>
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary" className="loginbtn" title="Send Email" type="submit">Send Email</Button>
                  
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

import React, { Component } from 'react';
import { Link, Redirect} from "react-router-dom";
import {InputGroup,Tooltip, Whisper, Icon, ButtonToolbar, Panel, Button, FlexboxGrid, Container, Content, Form, FormGroup, FormControl, ControlLabel, Schema } from 'rsuite';
import { connect } from 'react-redux';

// START --->  css files
import 'rsuite/dist/styles/rsuite-default.css';
import './assets/css/loginForm.css';
// END   --->  css files

// START ----> Importing External Components 
import {userLoggedInAction} from './../redux/actions/userLoggedInAction'; // Handling Login Request
import NavBarBeforeLogin from '../navbar/NavBarBeforeLogin'; // Top Nav before Login
// END   ----> Importing External Components 

 class LoginPage extends Component {

constructor(props)
{
  super(props);
  this.state = {
    checked: true,
    eyetitle: true,
    formValue: {
      username: '',
      password: '',
      },
    formError: {}
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.showpassword = this.showpassword.bind(this);
}

// START  Password type (hidden or show)

  showpassword = () =>{
    
var password = document.getElementById("password");

if (password.type === "password") {
  
  password.type = "text";
  this.setState({
    eyetitle: false,
    checked: false
  });
  
} else {
  password.type = "password";
  this.setState({
    eyetitle: true,
    checked: true
  });

}

}
// END  Password type (hidden or show)

// START Login Request ---> Form Submit
handleSubmit() {
  const { formValue } = this.state;
  const { dispatch } = this.props;
  if (this.form.check()) {
    dispatch(userLoggedInAction(formValue.username, formValue.password)).then(()=>{
    this.setState({
         isLoaded:  true,
     });
    })
  }
}
// END Login Request ---> Form Submit

    render() {
      if(this.props.isLoggedIn===true || this.props.isLoggedInCheck === true){
      return (<Redirect to="/home" />)
      } 
      else{
      const { formValue }= this.state
      const { StringType } = Schema.Types;
      const model = Schema.Model({
        username: StringType().isRequired('This field is required.').isEmail('Please enter an valid email.'),
        password: StringType().isRequired('This field is required.'),
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

        {/* START navbar before login Component */}

       <NavBarBeforeLogin />  
       
      {/* END navbar before login Component */}

  <div className="show-container">
  <Container>
    
  <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<span className="log-in">LOG IN</span>} bordered>
              <Form fluid model={model}ref={ref => (this.form = ref)}
          onChange={formValue => {
            this.setState({ formValue });
          }}
          onCheck={formError => {
            this.setState({ formError });
          }}
          formValue={formValue}>
              <FormGroup>
                <ControlLabel><b>Username:</b> </ControlLabel>
              <FormControl name="username" className="newfields" type="text"/>
               </FormGroup>
              
               <FormGroup>
                <ControlLabel><b>Password</b>: </ControlLabel>
                <InputGroup inside>
                <FormControl name="password" type="password" className="newfields" autoComplete="off" id="password"/>
                  <InputGroup.Addon className="eye" onClick={this.showpassword} >
        
  <Whisper placement="top" trigger="hover" speaker={this.state.eyetitle ? showPassword : hidePassword}>
  <Icon icon = {this.state.checked ? 'eye' : 'eye-slash'} />
    </Whisper>  
                  
            </InputGroup.Addon>
            </InputGroup>
                </FormGroup>
                



                <div className="password"><Link to="/forgotpassword"><Button appearance="link" title="Forgot your password?">Forgot your password?</Button></Link></div>
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary" className="loginbtn" type="submit" onClick={this.handleSubmit} title="Log In">Log In</Button>
                  
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
}
function mapStateToProps(state) {

  const { isLoggedIn } = state.userLoggedIn;
  return {
    isLoggedIn
  }
}
export default connect(mapStateToProps)(LoginPage) ;

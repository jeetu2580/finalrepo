import React, { Component } from 'react';
import LoginPage from './components/login/LoginPage';
import ForgetPassword from './components/login/ForgetPassword';
import SignUp from './components/login/SignUp';
import Home from './components/Home/Home';
import CreateACampaign from './components/CreateACampaign/CreateACampaign';
import BillingInfo from './components/Billing/BillingInfo';
import ChangePassword from './components/login/ChangePassword';
import AccountInfo from './components/AccountInfo/AccountInfo';
import AccountInfoEdit from './components/AccountInfo/AccountInfoEdit';
import AssetLibrary from './components/AssetLibrary/AssetLibrary';
import CreateTemplates from './components/AssetLibrary/Templates/Email/CreateTemplates';
import CreateEmail from './components/CreateACampaign/Email/CreateEmail';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import axios from 'axios';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
import './App.css';



 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "Loading"
            };
 }

 componentDidMount()
  {
    axios.get('http://localhost:4000/isLoggedIn', {withCredentials: true}).then((res)=>{
        
  if(res.data.status===200)
  {
 
    this.setState({
  
      isLoggedIn:true,
      users: true
      
    })

    
  }
  if(res.data.status===202)
  {
   this.setState({
  isLoggedIn: false
    })
  }
 });
  }
  render() {
    
    if(this.state.isLoggedIn===true || this.props.isLoggedIn ===true ){

      // alert(this.state.isLoggedIn)
      return (
        <Router>
          
        <Switch>
        <Route path="/login">
       <LoginPage isLoggedInCheck={true}/>
       </Route>
       {/* <ProtectedRoute path="/" component={Home} isLoggedIn={true}/> */}
       <ProtectedRoute path="/home" component={Home} isLoggedIn={true}/>
        <ProtectedRoute path="/createcampaign" component={CreateACampaign} isLoggedIn={true}/>
        <ProtectedRoute path="/AccountInfo"  component={AccountInfo} isLoggedIn={true}/>
        <ProtectedRoute path="/createemail"  component={CreateEmail} isLoggedIn={true} />
        <ProtectedRoute path="/billing"  component={BillingInfo} isLoggedIn={true}/>
        <ProtectedRoute path="/AccountInfoEdit"  component={AccountInfoEdit} isLoggedIn={true}/>
        <ProtectedRoute path="/AssetLibrary/createtemplate"  exact component={CreateTemplates} isLoggedIn={true}/>
        <ProtectedRoute path="/AssetLibrary" component={AssetLibrary} isLoggedIn={true}/>
        
        
            
  {/* 
            <EmailCreationMethod> */}
          </Switch>
        </Router>
      )
     }
     if(this.state.isLoggedIn==="Loading")
     {
       
       return(<>Loading...</>)
     }
    if(this.state.isLoggedIn === false)
    {
    
      return(<Router>
        {/* <Container> */}
            {/* <Header><TopNav/></Header> </Container> */}
             <Route path="/login"><LoginPage /></Route>
            <Redirect to= "/login" />
            <Route path="/signup"><SignUp /></Route>
            <Route path="/forgotpassword"> 
            <ForgetPassword />
          </Route>
          <Route path="/changepassword">
            <ChangePassword />
          </Route>
          </Router>);
            
    }
 
   
  }
}
function mapStateToProps(state) {

  const { isLoggedIn } = state.userLoggedIn;
  return {
    isLoggedIn
  }
}
// Function to Map Redux State to the App Component




//exporting the app and mapping the redux state to the App Component
export default connect(mapStateToProps)(App) ;



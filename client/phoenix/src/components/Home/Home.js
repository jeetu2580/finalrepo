import React, { Component } from 'react';
import {Container} from 'rsuite';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';
import HomeDashboard from './../Dashboard/HomeDashboard';
// import SelectACampaignToCreate from './../CreateACampaign/SelectACampaignToCreate'
import Creationstation from './Creationstation';
import Createacampaign from './Createacampaign';
import 'rsuite/dist/styles/rsuite-default.css';
import './assets/css/home.css';
import { connect } from 'react-redux';




 class Home extends Component {


    render() {
    //  if(this.props.isLoggedIn === true){

        return (
            <>

            {/* START navbar after login component */}
            
       <NavBarAfterLogin />  
      
      {/* END navbar after login component*/}

  <div className="show-container welcomeMessage">
  <Container>
    

{/* Start Importing CreateCampaign */}
{/* <SelectACampaignToCreate /> */}
{/* End Importing CreateCampaign */}

<Creationstation/>

<Createacampaign/>

{/* Start Importing Dashboard Activity */}
  <HomeDashboard />  
{/* End Importing Dashboard Activity */}

{/* <LoremIPSUM/> */}
     
    </Container>
    
    </div>
            </>
        )
    // }
    // else{
    //    return (<Redirect to="/login" />)
     
    // }
  }
}
function mapStateToProps(state) {

    const { isLoggedIn } = state.userLoggedIn;
    return {
      isLoggedIn  
    }
  }
  export default connect(mapStateToProps)(Home)
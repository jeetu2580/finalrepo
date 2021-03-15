import React, { Component } from 'react';
import {Container, Content} from 'rsuite';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';
import ActiveCampaignStatus from './ActiveCampaignStatus';


import 'rsuite/dist/styles/rsuite-default.css';
import './assets/css/BillingInfo.css'
  
  export default class BillingInfo extends Component {
    



    render() {
      
      return (

        <>
            
            {/* START navbar after login component */}

        <NavBarAfterLogin /> 

        {/* END navbar after login component */}

        <div className="show-container">
  <Container>
    
  <Content>
        
        <div>
            <div className="headline">
                <span className="campaign-your-brand">BILLING</span>
            </div>
         
         
        </div>
        </Content>
        <Content className="billingWelcome">
      <div><h5>CURRENT CAMPAIGNS</h5>
      <p>Select a campaign below to view detail.</p>
      </div>
      <br />
       <ActiveCampaignStatus />
        
        </Content>
        </Container>
        </div>

        </>
      );
    }
  }

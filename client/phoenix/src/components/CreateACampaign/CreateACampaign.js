import React, { Component } from 'react';
import {Container, Content, Nav, Icon} from 'rsuite';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';
import CreateEmail from './Email/CreateEmail';
import CreateDigital from './Digital/CreateDigital';
import 'rsuite/dist/styles/rsuite-default.css';
import './assets/css/CreateACampaign.css';

// START customNav function

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} activeKey={active} onSelect={onSelect} >
        <Nav.Item eventKey="email" icon={<Icon icon="envelope"/>} className="navicon"> EMAIL</Nav.Item>
        <Nav.Item eventKey="digital" icon={<Icon icon="book"/> } className="navicon">DIGITAL</Nav.Item>
        <Nav.Item eventKey="mail" icon={<Icon icon="credit-card"/> } className="navicon">MAIL</Nav.Item>
        <Nav.Item eventKey="social" icon={<Icon icon="facebook-square"/>} className="navicon">SOCIAL</Nav.Item>
      </Nav>
    );
  };

  // END customNav function
  
  export default class CreateACampaign extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 'email',
        type: 'email',
     
      };



      
      this.handleSelect = this.handleSelect.bind(this);
    }

// START function for activated campaign type 

    handleSelect(activeKey) {
      this.setState({ active: activeKey });
      this.setState({
       type: activeKey

      });
    }

    // END function for activated campaign type


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
                <span className="campaign-your-brand">CAMPAIGN: YOUR BRAND SEASONAL PROMOTION</span>
            </div>
          <CustomNav appearance="tabs" active={this.state.active} onSelect={this.handleSelect} className="navBottomTabs"/>
         
        </div>
        </Content>
        <Content className="CreateEmailnew">
         
        {/* START Importing CreateEmail Component for Email type Campaign */}

        {this.state.type === "email" && <CreateEmail />}

        {/* END Importing CreateEmail Component for Email type Campaign */}

        {/* START Importing CreateDigital Component for digital type Campaign */}

        {this.state.type === "digital" && <CreateDigital />}
        {/* END Importing CreateDigital Component for digital type Campaign */}
        
        </Content>
        </Container>
        </div>

        </>
      );
    }
  }

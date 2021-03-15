import React, { Component } from 'react'
import {Icon, Container, Sidebar} from 'rsuite';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';
import { Link, Route, Switch} from "react-router-dom";
import AccountInfo from "./AccountInfo";
import UserManagement from "./UserManagement";
import FranchiseInformation from "./FranchiseInformation";
import OrderHistory from "./OrderHistory";


import "./assets/css/AccountInfo.css"; 


export default class AccountManagement extends Component {

constructor(props)
{
  super(props);
  this.state = {
    active: ""
  }
  this.activeMakeClassSideNav = this.activeMakeClassSideNav.bind();
}

// Start Function to change the class active in sidebar navigation
activeMakeClassSideNav  = (e) =>
{
const type = e.currentTarget.getAttribute("data-id");
this.setState({
  active: type
})
}




// End Function to change the class active in sidebar navigation
    render() {
     

        return (
            <>
            <NavBarAfterLogin />
<Container className="ContainerEmailCreate">
<Sidebar>
<div className="SideNavPanel">
<ul className="sidepanelUL">
<Link to="/AccountManagement/AccountInfo" title="Account Information" data-id="accountinfo" onClick={this.activeMakeClassSideNav}><li>Account Information &nbsp;{this.state.active === "accountinfo" ? <><Icon icon="angle-down"/></> : <><Icon icon="angle-right"/></>}</li></Link>
<Link to="/Accountmanagement/Usermanagement" data-id="UserManagement" onClick={this.activeMakeClassSideNav} title="User Management"><li>User Management &nbsp;{this.state.active === "UserManagement" ? <><Icon icon="angle-down"/></> : <><Icon icon="angle-right"/></>}</li></Link>
<Link to="/Accountmanagement/Franchiseinformation"  data-id="FranchiseInformation" onClick={this.activeMakeClassSideNav} title="Franchise Information"><li>Franchise Information &nbsp;{this.state.active === "FranchiseInformation" ? <><Icon icon="angle-down"/></> : <><Icon icon="angle-right"/></>}</li></Link>
<Link to="/Accountmanagement/Orderhistory" title="Order History" data-id="OrderHistory" onClick={this.activeMakeClassSideNav}><li>Order History &nbsp;{this.state.active === "OrderHistory" ? <><Icon icon="angle-down"/></> : <><Icon icon="angle-right"/></>}</li></Link>
<Link to="/AccountInfoEdit" title="Notifications" data-id="Notifications" onClick={this.activeMakeClassSideNav}><li>Notifications &nbsp;{this.state.active === "Notifications" ? <><Icon icon="angle-down"/></> : <><Icon icon="angle-right"/></>}</li></Link>
</ul>
</div>

</Sidebar>

<Switch>
          <Route path="/Accountmanagement/Accountinfo">
            <AccountInfo />
          </Route>
          <Route path="/Accountmanagement/Usermanagement">
            <UserManagement />
          </Route>
          <Route path="/Accountmanagement/FranchiseInformation">
            <FranchiseInformation />
          </Route>
          <Route path="/Accountmanagement/Orderhistory">
            <OrderHistory />
          </Route>
          
          
        </Switch>


</Container> 

           </>
        )
    }
}

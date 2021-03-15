import React, { Component } from 'react'
import {Row,Col,Button, Panel, Content, Container, Sidebar, ButtonToolbar} from 'rsuite';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';

import { NavLink} from "react-router-dom";
import listsvg from './assets/icons/list.svg';
import gridsvg from './assets/icons/grid-deactivated.svg';
import { Route, Switch } from 'react-router-dom';
import "./assets/css/AssetLibrary.css"; 
import Templateemail from './Templateemail';

export default class AccountInfo extends Component {
    render() {
       
      
        return (
            <>
            <NavBarAfterLogin />
            <Row>
                <Col md={3} sm={24}></Col>
<Col md={21} sm={24}>
    <h4>Asset Library</h4>
</Col>

                </Row><hr/>
                <Row>
<Col md={6} sm={24}>
    
</Col>
<Col md={4} sm={24}>
    <p>Sort by: Date Uploaded | Name</p>
    
</Col>
<Col md={1} sm={12}>
<img src={gridsvg} alt="React Logo" /></Col>
<Col md={1} sm={12}>
<img src={listsvg} alt="React Logo" />
</Col>
<Col md={6} sm={24}></Col>
<Col md={6} sm={24}>
<ButtonToolbar>
<NavLink to="" title="Upload">
<Button className="AssetLibrary">Upload New</Button></NavLink>
</ButtonToolbar>
</Col>

                </Row>
<Container className="ContainerEmailCreate">
               
<Sidebar>
<Panel><h5>ASSETS</h5>

  </Panel>
  
<div className="SideNavPanel">
<Panel header="Images" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="Videos" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="Offers" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel header="Code" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>

  <Panel><h5>TEMPLATES</h5>

  </Panel>
  <Panel header="Email" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>
  <Panel header="Digital Media" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>
  <Panel header="Direct Mail" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>
  <Panel header="Social" collapsible>
<Button appearance="link" title=">Holiday Templates">Holiday Templates</Button><br />
<Button appearance="link" title="Christmas Templates">Christmas Templates</Button>
  </Panel>
</div>

</Sidebar>

<Content>
<Switch>
<Route exact path="/AssetLibrary/template/email">
<Templateemail />
</Route>
  
</Switch>


</Content>

</Container> 


           </>
        )
    }
}

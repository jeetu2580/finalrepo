import React, { Component } from 'react'
import './assets/css/SelectACampaignToCreate.css';
import {Schema, Content, Icon, Grid, Row, Col, Form, FormControl, FormGroup, Button, ButtonToolbar} from 'rsuite';

export default class CreateACampaign extends Component {
    render() {
        const { StringType } = Schema.Types;
const model = Schema.Model({
    CampaignName: StringType().isRequired('This field is required.'), /* Validation for create campaign field*/
 
});
        return (
            <div>
                  <Content>
                  <br />
                  <br />
                  <br />
        <br />
        <h5>CREATE A NEW CAMPAIGN</h5>
        <p>What do you want to create for this campaign? <span className="disclaimerCam">(You may choose more than one.)</span></p>
      
      <div className="campaignSelect">
      <Grid fluid>
      <Row>
      <Col xs={8} md={8} className="chosecamp">

<p style={{"margin-top": 15}}>Choose the campaign pieces you whish to create:*</p>
<table width="100%" className="selectAcamp">
<tr>
<td className="center active"><Icon icon="envelope" size="2x"/></td>
<td>Email</td>
<td>&nbsp;</td>
<td className="center inactive"><Icon icon="facebook-square" size="2x"/></td>
<td>Social Media</td>

</tr>

<tr>

    <td colSpan="5"></td>
</tr>

<tr>
<td className="center inactive"><Icon icon="book" size="2x"/></td>
<td>Digital Media</td>
<td>&nbsp;</td>
<td className="center inactive"><Icon icon="credit-card" size="2x"/></td>
<td>Direct Mail</td>

</tr>
<tr>

    <td colSpan="5"></td>
</tr>

<tr>
<td colSpan="5">
Please name your campaign*
<Form model={model}>
     
<FormGroup>
    <FormControl name="CampaignName" className="Campnameinput"/>
    </FormGroup>
      
     
      <ButtonToolbar>
        <Button appearance="primary" type="submit" style={{"width": 200, marginTop: 15}}>
          Create Campaign
        </Button>
      </ButtonToolbar>
    </Form>

</td>
</tr>


</table>




</Col>

<Col xs={1} md={1} className="middleDiv">


</Col>

<Col xs={15} md={15}>


</Col>
     

</Row>
</Grid>

      </div>
      <br />
                  <br />
                  <br />
        <br />
      </Content>
            </div>
        )
    }
}

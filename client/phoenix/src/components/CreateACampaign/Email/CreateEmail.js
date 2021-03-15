import React, { Component } from 'react';
import {Steps,ButtonGroup,Button,Container,Row,Col, Content } from 'rsuite';
import StepOneTemplates from "./StepOneTemplates";
import StepTwoCustomize from "./StepTwoCustomize";
// import EmailCreationMethod from "./EmailCreationMethod";
import DefineProperties from "./DefineProperties";
import NavBarAfterLogin from './../../navbar/NavBarAfterLogin';
import './assets/css/CreateEmail.css';
import {connect} from "react-redux";
import  Preview from "./Preview";
class CreateEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
         step: 0,
         buttonNext: `Next`,  /* State for Next button  */
         buttonPrevious: "",   /* State for previous button */
         activePreviousButton: "hide",   /* State for Type of button (hide or show )  */
         stepsTitle: "STEP 1: DEFINE PROPERTIES",  /* state for Steps Title  */
         stepSubtitle: "Define the Properties",    /* State for steps SubTitle  */
        //  method: "template"   /* State for create method  */
        };
  
        this.decline = this.decline.bind(this);
        this.increase = this.increase.bind(this);
     
      }

      // START function for email campaign steps

      changePercent(nextstep) {
        const step = nextstep < 0 ? 0 : nextstep > 3 ? 3 : nextstep;
        if(step>=1){
            this.setState({
                step,
                activePreviousButton: "show"
              });
        }

        else
        {
            this.setState({
                step,
                activePreviousButton: "hide"
              });   
        }
        this.setText(step)
       
      }
// END function for email campaign steps

// START function for dynamically setting button text & change step title

      setText(step)
      {
      
// var buttonText = ["Next Step: Select a method", "Next Step: Customize", "Next Step: Preview", "Next Step: Email List"];
// var PbuttonText = ["Previous Step: Templates", "Previous Step: Customize", "Previous Step: Preview", "Previous Step: Email List"];
var stepsTitle = ["STEP 1: DEFINE PROPERTIES", "STEP 2: EDIT EMAIL", "STEP 3: PREVIEW" ];
var stepssubTitle = ["Define the Properties.", "Customize your email", "Preview your email "];



if(this.props.formValues.methodEmail==="Template")
{

  // buttonText = ["Next Step: Select Template", "Next Step: Edit Email", "Next Step: Preview", "Next Step: Email List"];
// PbuttonText = ["Previous Step: Define Properties", "Previous Step: Customize", "Previous Step: Preview", "Previous Step: Email List"];
stepsTitle = ["STEP 1: DEFINE PROPERTIES", "STEP 2: SELECT TEMPLATE", "STEP 3: EDIT EMAIL" , "STEP 4: PREVIEW" ];
stepssubTitle = ["Define the Properties.", "Select your Template", "Design your email", "Preview your email "];

}
switch(step){
    case 0:
            this.setState({
                // buttonNext : buttonText[0],
                stepsTitle: stepsTitle[0],
                stepSubtitle: stepssubTitle[0] 
            });
            break;
        case 1:
            this.setState({
                // buttonNext : buttonText[1],
                // buttonPrevious: PbuttonText[0],
                stepsTitle: stepsTitle[1],
                stepSubtitle: stepssubTitle[1] 

            });
            break;
         case 2:
            this.setState({
                // buttonNext : buttonText[2],
                // buttonPrevious: PbuttonText[1],
                stepsTitle: stepsTitle[2],
                stepSubtitle: stepssubTitle[2] 

            });
            break;
            case 3:
                this.setState({
                  //  buttonNext : buttonText[1],
                    // buttonPrevious: PbuttonText[2],
                    stepsTitle: stepsTitle[3],
                stepSubtitle: stepssubTitle[3]
                });
                break;  
          default:
            this.setState({
                // buttonNext : PbuttonText[0],
                stepsTitle: stepsTitle[0],
                stepSubtitle: stepssubTitle[0]
            }); 
}

      
    }

// END function for dynamically setting button text & change step title

// START function for previous step
      decline() {
        this.changePercent(this.state.step - 1);
        
      }

// END function for previous step

// START function for next step

      increase() {
       
      //   document.getElementById("next").click();
      //   if(this.props.formStatus===false)
      //   {
      //     document.getElementById("next").click();
      //   this.checkInput();
      // }
      // else
      // {
        
      // }
      

      if(this.props.formValues.emailName !== "" && this.props.formValues.subject !== "" && this.props.formValues.preheader !=="" && this.props.formValues.description !==""  && this.props.formValues.methodEmail !=="" )
  { 
    this.changePercent(this.state.step + 1);
  }
  else
    {
     this.checkInput();   
      }
    }
// END function for next step

    render() {
      
        const { step } = this.state;
        return (<>
           {/* START navbar after login component */}


           <NavBarAfterLogin /> 

{/* END navbar after login component */}

<Content>
        
        <div>
            <div className="headline" style={{marginLeft: '8%'}}>
                <span className="campaign-your-brand">Create New Email</span>
            </div>
          
        </div>
        </Content>

            <div style={{marginLeft: '10%', marginTop: 15}}>
            
            {this.props.formValues.methodEmail === "Template" &&<>
            
            <Steps current={step} className="steps">
              <Steps.Item title="Step 1: Define Properties" className="progresssteps"/>
            <Steps.Item title="Step 2: Select Template " className="progresssteps" />
              <Steps.Item title="Step 3: Edit Email " className="progresssteps" />
              <Steps.Item title="Step 4: Preview " className="progresssteps" />
              
            </Steps></>}

           
            {(this.props.formValues.methodEmail === "Scratch" || this.props.formValues.methodEmail === "")  &&<>
            
            <Steps current={step} className="steps">
              <Steps.Item title="Step 1: Define Properties" className="progresssteps"/>
              <Steps.Item title="Step 2: Edit Email " className="progresssteps" />
              <Steps.Item title="Step 3: Preview " className="progresssteps" />
             
            </Steps></>}

            <Container>

    <Row>
      <Col md={8} className= "step1">{this.state.stepsTitle} <br/> <span className="text">{this.state.stepSubtitle}</span>   </Col>
  
      <Col md={6}></Col>
      <Col md={10}>
      <Row>
      {/* <ButtonGroup className="button">
      <Col md={11}>
          
            {this.state.activePreviousButton==="show" ? <><Button className="previousButton" onClick={this.decline} disabled={step === 0}>
              {this.state.buttonPrevious}
              </Button></> : <><div style={{"width": "176px"}}></div></>}</Col>
              <Col md={2}></Col>
            <Col md={11}>   <Button onClick={this.increase} disabled={step === 3}>
              {this.state.buttonNext}
              </Button></Col>
              </ButtonGroup> */}


<ButtonGroup className="buttonNext">
  
          
            {
            this.state.activePreviousButton==="show" ?
            <><Button style={{width: 150}} appearance="primary" title="Previous" className="previousButton" onClick={this.decline} disabled={step === 0}>Previous</Button></> : <><Button  className="ghostButton" disabled ></Button></>}
           
            {(this.state.step !==3 && this.state.step !==2 && this.props.formValues.methodEmail==="Template" )&& <Button appearance="primary" title="Next" style={{width: 150}} onClick={this.increase}  id="next">Next</Button>}
             {this.state.step ===3 && <Button appearance="primary" title="Save" style={{width: 150}} onClick={this.increase} >Save</Button>}
             {(this.state.step ===2 && this.props.formValues.methodEmail==="Template")&&<Button appearance="primary" title="Next" style={{width: 150}} onClick={() => this.clickChild()} >Next</Button>}
             {(this.state.step ===1 && this.props.formValues.methodEmail==="Scratch")&&<Button appearance="primary" title="Next" style={{width: 150}} onClick={() => this.clickChild()} >Next</Button>}
             {(this.state.step ===0 && this.props.formValues.methodEmail==="Scratch" )&& <Button appearance="primary" title="Next" style={{width: 150}} onClick={this.increase}  id="next">Next</Button>}
             {(this.state.step ===2 && this.props.formValues.methodEmail ==="Scratch") && <Button appearance="primary" title="Save" style={{width: 150}} onClick={()=>this.saveDesign()} >Save</Button>}
              </ButtonGroup>

          </Row>    
          

            </Col>
      
    </Row>
</Container>
    
          </div>
          <div className="show-container">
<Container style={{marginTop: 50}}>
    {this.state.step===0 && <DefineProperties setClick={click => this.checkInput = click}/>}
    {(this.state.step===1 && this.props.formValues.methodEmail==="Scratch") && <StepTwoCustomize setClick={click => this.clickChild = click} parentMethod={this.increase}  />}
    {(this.state.step===2 && this.props.formValues.methodEmail==="Scratch") && <Preview setClick={click => this.saveDesign = click}/>}
    {(this.state.step===1 && this.props.formValues.methodEmail==="Template") && <StepOneTemplates />}
    {(this.state.step===2 && this.props.formValues.methodEmail==="Template")&& <StepTwoCustomize setClick={click => this.clickChild = click} parentMethod={this.increase} />}
    {(this.state.step===3 && this.props.formValues.methodEmail==="Template") && <Preview  />}
    
</Container>

</div></>
        )
    }
}
function mapStateToProps (state){
const {formValues, formStatus} = state.emailPropertiesreducer;
return{
  formValues, formStatus
}
}
export default connect(mapStateToProps)(CreateEmail) 
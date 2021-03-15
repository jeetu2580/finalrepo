import {
    SAVE_DESIGN_SUCCESS,
    SAVE_DESIGN_FAILED} from "./actionTypes";
import {Alert} from "rsuite";
import saveDesignnHtmlService from "../services/saveDesignnHtmlService";

export const saveDesignnHtmlAction = (formValues,html,design) => async (dispatch)=>{
    try{
        const saveDesignnHtml = await saveDesignnHtmlService.DesignnHtmlService(formValues,html,design);
        if(saveDesignnHtml.status === 201){
            Alert.success("Email Creation successfull")
           dispatch({
            type: SAVE_DESIGN_SUCCESS,
            payload: {
                userdata: saveDesignnHtml.userinfo,
            }
          });
        }
        else 
        {
            Alert.error("Email Creation Failed")
            dispatch({
            type: SAVE_DESIGN_FAILED,
            payload: {
            }
            })
        }
    }
    catch(error){
        
    }
        
    
}

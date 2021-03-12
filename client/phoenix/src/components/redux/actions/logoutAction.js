import {USER_LOGGED_IN_FAILED,USER_LOGOUT} from "./actionTypes";
import UserLoginService from '../services/UserLoginService'

 

export const userLoggedOutAction = () => async (dispatch)=>{
  
try
{
 const userLoggedOutStatus = await UserLoginService.userLoggedOutService();
    if(userLoggedOutStatus.status === 201){
        localStorage.clear();
        dispatch({
        type: USER_LOGGED_IN_FAILED,
        payload: {
            isLoggedIn:false,
            userdata : ""
        }
      })
      dispatch({
        type: USER_LOGOUT,
        payload: {
            isLoggedIn:false,
            userdata : ""
        }
    })
    
}
}
catch(error){
    
}
}
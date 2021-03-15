import { 
    USER_LOGGED_IN_SUCCESS, 
    USER_LOGGED_IN_FAILED
 } 
    from "./../actions/actionTypes"; //Types of Actions for LoggedIn status

const initial = {
    
}

export default function getLoggedInUserInfo(state=initial, action)
{
    
    const { type, payload } = action;

    switch (type) {
        case USER_LOGGED_IN_SUCCESS:
        return {
            ...state,
            userdata: payload.userdata,
            isLoggedIn:payload.userdata.status[0].isLoggedIn
        }
        case USER_LOGGED_IN_FAILED:
            return {
                ...state,
                userdata: "",
            isLoggedIn:false,
            
            }
        default:
            return state;
        
    }
}
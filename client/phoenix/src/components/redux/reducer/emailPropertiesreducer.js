
import { 
    SET_EMAIL_PROPERTIES, SET_EMAIL_HTML, USER_LOGOUT
} from "./../actions/actionTypes";

const initialState = {
    
    formValues: {
      methodEmail:'Template',
      emailName: '',
      subject:"",
      preheader:"",
      description:""
    },
    html:{},
    design:"",
    
   
  };
  
  const emailPropertiesreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EMAIL_PROPERTIES:
        return {
          ...state,
          formValues: action.payload
        };
        case SET_EMAIL_HTML:
        return {
          ...state,
          html: action.payloadh,
          design : action.payloadd
        };
        case USER_LOGOUT:
          return {
            ...state,
            formValues: "",
            design :"",
            html: "",
          };
          
        
      default:
        return state;
    }
  };
  
  export default emailPropertiesreducer;
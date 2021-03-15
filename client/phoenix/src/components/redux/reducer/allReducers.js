import { combineReducers } from "redux";
import userLoggedIn from "./userLoggedInReducer"; // User loggedIn Status
import emailPropertiesreducer from "./emailPropertiesreducer";  // Email Properties

export default combineReducers({
    userLoggedIn,emailPropertiesreducer
});
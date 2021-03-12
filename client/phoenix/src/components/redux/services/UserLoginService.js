import axios from 'axios';
import axiosInstance from "../../config/axiosHeader";
class UserLoginService {
    
    async userLoggedInService(username, password){

if((username !==undefined && password !==undefined ) && (username !=="" && password !=="")){

  const response = await axios.post('http://localhost:4000/login', { username, password }, {withCredentials : true, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}}); 
  return response.data; 
}
    }

    async userLoggedOutService (){
      const configaxios= axiosInstance();
      const response = await configaxios.post('http://localhost:4000/logout', {withCredentials : true, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}}) 
       return response.data; 
    }
  }
export default new UserLoginService();
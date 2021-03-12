import axios from "axios";

export default function axiosInstance()
{
  var token = localStorage.getItem("token");
  axios.defaults.withCredentials = true;
var instance = axios.create({
  headers: {
    'Authorization': `Bearer ${token}` ,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
 }
);

return instance;

}

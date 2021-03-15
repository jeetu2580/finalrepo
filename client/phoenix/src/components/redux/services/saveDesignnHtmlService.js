import axiosInstance from "../../config/axiosHeader";

class saveDesignnHtmlService{
    async DesignnHtmlService (formValues,html,design){
        const configaxios= axiosInstance();
        const response = await configaxios.post('http://localhost:4000/saveDesign', { formValues,html,design }, {withCredentials : true, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}}); 
        return response.data
    }
}
export default new saveDesignnHtmlService();
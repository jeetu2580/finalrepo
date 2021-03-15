const axios = require('axios');
var axiosInstances = module.exports;
axiosInstances.init = (app) =>{
    var instance = axios.create ({
        headers : {
            Authorization:
            "Bearer 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"
        },
    })
        
    return instance;
    
}
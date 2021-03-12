

module.exports = function() {
    var fs = require('file-system');
    this.writeHtml = function(userData, callback) {
        
        var emailName= userData.formValues.emailName;
        
        var pathHtml = "./"+userData.formValues.emailName+"/"+emailName+"_html"+".html";
        var dataHtml =  userData.html
        fs.writeFile(pathHtml, dataHtml, (err) => {
          if (err) {
            console.error(err)
            throw err
          }
      else {
        var pathJson = "./"+userData.formValues.emailName+"/"+emailName+"_json"+".json";
        var dataDesign =  userData.design
        fs.writeFile(pathJson, dataDesign, (err) => {
          if (err) {
            console.error(err)
            throw err
          }
          else{
            callback({ status:201,pathJson:pathJson,pathHtml:pathHtml });
          }
          
      
        })
    }
})
    }
}
var SaveDesignNHtmlController = module.exports;
var fs = require('file-system');


SaveDesignNHtmlController.init = (app,isAuthenticated,jwtVerify) =>{
 
    app.post('/saveDesign',jwtVerify, (req, res) => {
        
        var emailName = req.body.formValues.emailName
        var user_email = req.user.email;
        var email_subject_line = req.body.formValues.subject;
        var preheader =  req.body.formValues.preheader;
        var description =  req.body.formValues.description; 
        var Foldername = "./"+req.body.formValues.emailName;
        
        fs.mkdir(Foldername, function(err) {
            if (err) {
              return res.send({status : 406})
            } 
            else {
                writeHtml(req.body, function(callback) {
                    if(callback.status === 201){
                    pool.getConnection(function (err, con) {
                       if (err) throw err;
                        if(con)
                        {
                            con.query(`Select * from email_properties where email_name = '${emailName}'`,function(err,result){
                                if (err) 
                               {
                                console.log(err)
                                return res.send({status : 406,message : "Error with Server"})
                               }
                               else(result.length <= 0)
                               {
                                var forAllDate = new Date().toISOString().split('T')[0];
                                var datetime = new Date()
                                var d = new Date(datetime)
                                var time = d.toTimeString();
                                var forAllTime = time.split(' ')[0];
                                
                                   con.query(`insert into email_properties (email_name,email_subject_line,email_preheader,email_description,email_html_path,email_json_path,email_created_by,email_created_date,email_created_time,email_modified_by,email_modified_time,email_modified_date)  values('${emailName}','${email_subject_line}','${preheader}','${description}','${callback.pathHtml}','${callback.pathJson}','${user_email}','${forAllDate}','${forAllTime}','${user_email}','${forAllTime}','${forAllDate}') `,function(err,result){
                                       if (err) {
                                           return res.send({status:406,message : "Error with Server"})
                                       }
                                       if(result.affectedRows >0){
                                           return res.send({status : 201,message : "Email Saved Successfully"})
                                       }
                                    
                                   })    
                               }
                            })
                           
        
                        }
                    })
                }
                    //  return res.send({status : 406,message:"Email can't be Saved "})
                
                })
               
            }
          })
      });
}

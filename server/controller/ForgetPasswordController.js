
const {body , validationResult, check} =  require('express-validator');
const axios = require('axios');
var jwt = require('jsonwebtoken');
const fs = require('fs')


var ForgetPasswordController = module.exports;


ForgetPasswordController.init = (app) =>{
   
app.post("/ForgetPassword",
[
    body ('email', 'Please Enter an valid Email Address').isEmail().normalizeEmail()
], function(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
    return res.status(202).jsonp(errors.array()).end();   
 }
    
    const email= req.body.email;

    pool.getConnection(function (err, con) {
 
        
if(err) throw err

const finduser = "select * from user_login where user_email  = '" + email + "';";
if (con){
  
   con.query(finduser,(err,user)=>{
     

 
      if (user.length>0){

  
        var token = jwt.sign({
           email:req.body.email
          },process.env.secret,{
              expiresIn:"1d"
          })

         fs.readFile('./PasswordReset/ChangePasswordEmail.html', 'utf8' , (err, data) => {
            if (err) {
               
              return
            }
           else
           {

         // var emailHTML =  data;
        //    var fuck = "hello " + token 
        
     axios({
        method : "post",
        url: "https://api.sendgrid.com/v3/mail/send",
        headers: {
           Authorization: "Bearer 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"
         },
        data: {
           "personalizations": [
               {
                 "to": [
                   {
                     "email": "nihalpayaal@gmail.com"
                   
                   }
                 ]}],
           
           "subject": "Password Reset",
           "from": {
             "email": "info@detroitsoftware.com"
           },
           "subject": "Password Reset",
           "from": {
               "email": "info@detroitsoftware.com"
             },
             "content": [
               {
               
                 "type": "text/html",
                "value": ""

               }
             ]
         
        }
    }).then(result=>{
        console.log("Testing")
    })
        
        } 
          })


  
        

      }
      else{
        return res.status(201).send({error:"Please enter a registred email address."})
    }

   })

}


    })






}

)
}
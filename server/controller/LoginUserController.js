var LoginUserController = module.exports;
const {body , validationResult, check} =  require('express-validator');
LoginUserController.init = (app, passport) => {
    
 
    
    app.post('/login',
    [
        body ('username', 'Please Enter an valid Email Address').isEmail().normalizeEmail(),
        body ('password', 'Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long"').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
        
    ], function(req, res, next) {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(202).jsonp(errors.array()).end();   
     }
  else{
    passport.authenticate("local", { session: true }, (err, user, info) =>{
           
         var isLoggedIn = user.status[0].isLoggedIn;
         
            if(err) throw err;
            if(isLoggedIn === true)
            {
               req.logIn(user, err => {
                    if(err) throw err;
               return  res.send({'userinfo' : req.session.passport.user});
                    
                });
            }
           else
           {
            return   res.send({'userinfo' : user,LoginStatus : true});
           }
     })(req, res, next)
    }

    });  
        
   
}
const localStrategy = require('passport-local').Strategy;
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = function(passport){

    passport.use(new localStrategy(
        function(username, password, done) {
       
            pool.getConnection(function (err, con) {

                
                if (err) throw err
                const findUser = "select * from user_login where user_email  = '" + username + "';";  
                
                if(con)
                {
                    
                    const UserExistence = con.query(findUser, (err, user)=>{

                       if (err) { return done(err); }
                     
                        else
                        {
                           
                          if(user.length>0)
                          { 
                          
                                bcrypt.compare(password, user[0].user_password, (err, result)=>{
                                  
                                    if (err) throw err;
                                    if (result === true){
                                        
                                        const user_id = user[0].user_id;
                                        const user_email = user[0].user_email;
                                       
                                        const getUserInfo = "select user_id from user_login where user_email  = '" + user_email + "' && user_id = '"+ user_id  +"';"; 
                                       con.query(getUserInfo, (err, result)=>{
                                        if (err) throw err;
                                        
                                        if(result.length>0)
                                        {
                                            var token = jwt.sign({
                                              id:result[0].user_id,
                                              email:username
                                            },process.env.secret,{
                                                expiresIn:"1d"
                                            })
                                            var refreshtoken = jwt.sign({
                                                id:result[0].user_id,
                                                email:username
                                              },process.env.secret,{
                                              })
                                              
                                              con.query(`update user_login set refresh_token = '${refreshtoken} 'where user_email = '${username}' `,function(err,results){
                                               if (err) {
                                                 con.destroy();
                                                   throw err;
                                               }  
                                               if(results.affectedRows > 0){
                                                  con.destroy();
                                                return done(null, {'user_id': result[0].user_id, token, 'status': [{'isLoggedIn': true,username:username}]})
                                               }
                                              })

                                            
                                            
                                        }
                                        else
                                        {
                                         con.destroy();
                                        return done(null, {'status': [{'isLoggedIn': false}]});
                                        }

                                       })
                                       
                                    }

                                    else{
                                        con.destroy();
                                       return done(null, {'status': [{'isLoggedIn': false}]});
                                
                                    } 
                                })
                         

                          }
                          else
                          {
                            
                            con.destroy();
                            return done(null, {'status': [{'isLoggedIn': false}]})
                          }
                        }

                    });
                }
                else
                {
                   
                    con.destroy();
                    return err;
                }


            });
          }
      ));

      passport.serializeUser((user, cb)=>{
         
        cb(null, user);
        });

        passport.deserializeUser((id, cb) => {
        
        const selectUserId = "select * from user_login where  user_id = '"+ id  +"';"; 
        pool.getConnection(function (err, con) {
        if(!con)
        {
            throw err;
        }
        else
        {
            con.query(selectUserId, (err, user) => {
            //   console.log(user[0])
                cb(err, user);
               
            });
        }
    });
    

});

};
exports.jwtVerify =function(req, res, next)  {
    var jwt = require('jsonwebtoken');
  const authHeader = req.headers.authorization;
  
    if (authHeader) {
       
        const realToken=authHeader.replace(/["']/g, "")
      const token = realToken.split(' ')[1];
        jwt.verify(token,process.env.secret, (err, user) => {
            if (err) {
              req.session.destroy();
                return res.send({status:403}); 
            }
    else{
  
            req.user = user;
           
            next();
    }
        });
    } else {
      req.session.destroy();
      return res.sendStatus(401);
    }
}
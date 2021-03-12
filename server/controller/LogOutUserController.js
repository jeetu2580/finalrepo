LogOutUserController

var LogOutUserController = module.exports;

LogOutUserController.init = (app,jwtVerify) => {
    app.post("/logout",jwtVerify,function(req,res){
        req.logOut();
        req.session.destroy(function (err) {
            res.clearCookie('connect');
            return res.send({
                "status":201
            })
        }
        )
    })
}
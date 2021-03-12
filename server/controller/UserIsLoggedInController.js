var UserIsLoggedInController = module.exports;

UserIsLoggedInController.init = (app, isAuthenticated)=>{

    app.get('/isLoggedIn',isAuthenticated, (req, res) => { 
        res.send({"status": 200, 'user_id': req.session.passport.user.user_id});
});


}
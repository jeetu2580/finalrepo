module.exports.init = (app, passport,isAuthenticated,jwtVerify) => {
 require("./LoginUserController").init(app, passport);
 require("./UserIsLoggedInController").init(app, isAuthenticated);
 require("./LogOutUserController").init(app,jwtVerify);
 require("./SaveDesignNHtmlController").init(app,isAuthenticated,jwtVerify);
}
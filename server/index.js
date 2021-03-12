require("dotenv").config()
const express = require('express');
const port = process.env.port;
var mysql = require("mysql");
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
var {jwtVerify}  = require("./controller/config/jwtVerify");
// var {writeHtml} = require("./controller/config/writeFile");
var isAuthenticated = require('./controller/config/isAuthenticated');
const controllers = require('./controller');

//initializing the express app
const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(function(req,res,next){
    res.setHeader("Access-control-allow-origin",'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','origin', 'X-Requested-With,Content-type',"Content-Type", 'Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Content-Type", "application/json");
  next();
})
app.use(session({
    secret : process.env.secret,
    resave : false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 *24, httpOnly: true} 
    }))


    app.db =  pool =mysql.createPool({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.dbname,
    connectionLimit: 200,
    });

    pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });

    require('./controller/config/writeFile')(app.db)
    require('./controller/config/passport-config')(passport);
    app.use(passport.initialize());
    app.use(passport.session());

    controllers.init(app, passport, isAuthenticated,jwtVerify);

    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
/**
* @fileoverview Main server file
* @desc Main authService file
* @desc This service follows the Google JavaScript Style Guide rules.
*/

var app = require("express")(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    session = require("express-session"),
    chalk = require("chalk"),
    compression = require("compression"),
    mongoStore = require('connect-mongo')(session),
    helmet = require("helmet");
    
//Local Configurations
var serverPortConfiguration = require("./Config/serverPortConfig");
var mongoDbConfig = require("./Config/mongoDBConfig");
var winston = require("./Config/winstonConfig");

//Server Timeout is defaulting to 2 minutes
//Router
var user = require("./Routers/user");

app.use(cors());
mongoDbConfig.connect();
app.options("*", cors());
app.use(helmet());
app.use(compression());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy({setTo:"PHP 4.2.2"}));
app.use(require("morgan")("combined", {stream: winston.stream}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: serverPortConfiguration.sessionSecret,
    cookie: { maxAge: 1209600000 },
    store: new mongoStore({
      url: mongoDbConfig.mongoUrl,
      autoReconnect: true,
    })
}));

app.use("/api/auth", user);

app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
});

app.use("*", (req,res)=> {
    res.status(404).json("The route you requested has not been found");
});

app.listen(serverPortConfiguration.port,serverPortConfiguration.host,()=> console.log(`%s Audience server running on ${serverPortConfiguration.port}`, chalk.green('✓')));

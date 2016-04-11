var bodyParser = require('body-parser');
var session = require('express-session');

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.set('trust proxy', 1); // trust first proxy 
  app.use(session({
    secret: 'but there isnt a bunny anywhere',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
}


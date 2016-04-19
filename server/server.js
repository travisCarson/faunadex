var express = require('express');
var path = require('path');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

if(!module.parent){ 
  app.listen(80);
}


console.log('80 server started!');

module.exports = app;


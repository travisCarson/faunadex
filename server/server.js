var express = require('express');
var app = express();
var path = require('path');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(1337);
console.log('1337 server started!');


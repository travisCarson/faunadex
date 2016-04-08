var bodyParser = require('body-parser');
var session = require('express-session');

module.exports = function (app, express) {
	app.use(bodyParser.urlencoded({extended: true}));
}
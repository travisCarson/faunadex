// var userController = require('../models/user/userController.js');
var path = require('path');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));
  // app.post('/signup', userController.signUpUser);
}



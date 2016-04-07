// var userController = require('../models/user/userController.js');
var path = require('path');
var userModel = require('');
var encounterModel = require('');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/user/signup', userController.signUp);
  app.post('/api/user/signin', userController.signIn);
  app.post('/api/user/signout', userController.signOut);

  // encounter routing
  app.get('/api/user/encounter', encounterController.showAllEncounters);
  app.post('/api/user/encounter', encounterController.createEncounter);
  app.get('/api/recentactivity', encounterController.recentactivity);

  // app.post('/api/searchanimal', someController);
  // app.get('/api/friends/recentactivity', someController)
  // app.post('/signup', userController.signUpUser);
};



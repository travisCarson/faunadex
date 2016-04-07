// var userController = require('../models/user/userController.js');
var path = require('path');
var userModel = require('../models/user');
var encounterModel = require('../models/encounter');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/user/signup', userModel.signUp);
  app.post('/api/user/signin', userModel.signIn);
  app.post('/api/user/signout', userModel.signOut);

  // encounter routing
  app.get('/api/user/encounter', encounterModel.showAllEncounters);
  app.post('/api/user/encounter', encounterModel.createEncounter);
  app.get('/api/recentactivity', encounterModel.recentactivity);

  // app.post('/api/searchanimal', someController);
  // app.get('/api/friends/recentactivity', someController)
  // app.post('/signup', userController.signUpUser);
};



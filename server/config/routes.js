var path = require('path');
var userUtils = require('../utils/userUtils.js');
var encounterUtils = require('../utils/encounterUtils.js');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/user/signup', userUtils.createUser);

  /* 

  Done but not tested: check that createSession actually signs in a user. I don't think it does. I don't think there is a signin function 

   */

  app.post('/api/user/signin', userUtils.logInUser);
  app.post('/api/user/signout', userUtils.endSession);

  // allow viewing of a user's profile
  app.get('/api/:userName', userUtils.fetchUserProfile);

  // encounter routing
  app.get('/api/user/encounter', encounterUtils.showAllEncounters);
  app.post('/api/user/encounter', encounterUtils.createEncounter);
  app.get('/api/recentactivity', encounterUtils.recentActivity);

  // app.post('/api/searchanimal', someController);
  // app.get('/api/friends/recentactivity', someController)
};



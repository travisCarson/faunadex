var path = require('path');
var userUtils = require('../utils/userUtils.js');
var encounterUtils = require('../utils/encounterUtils.js');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  app.post('/api/user/signin', userUtils.signInUser);
  app.get('/api/user/signout', userUtils.signOutUser);
  app.post('/api/user/signup', userUtils.createUser);
  app.post('/api/user/getsignedinuser', userUtils.getSignedInUser);

  // allow viewing of a user's profile
  // app.get('/api/:userName', userUtils.fetchUserProfile);

  // encounter routing
  app.get('/api/user/encounters/:userName', userUtils.authenticationRequired, encounterUtils.showAllEncountersFromUser);
  app.post('/api/user/encounter', userUtils.authenticationRequired, encounterUtils.createEncounter);
  app.get('/api/recentencounters', userUtils.authenticationRequired, encounterUtils.recentEncounters);
  app.post('/api/encounter', encounterUtils.retrieveEncounterById);

  // app.post('/api/searchanimal', someController);
  // app.get('/api/friends/recentactivity', someController)
};



var path = require('path');
var userUtils = require('./userUtils.js');
var encounterUtils = require('./encounterUtils.js');

module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));

  // user routing
  app.post('/api/user/signup', userUtils.createUser);
  // TODO check that createSession actually signs in a user
  // I don't think it does. I don't think there is a signin function
  app.post('/api/user/signin', userUtils.createSession);
  app.post('/api/user/signout', userUtils.endSession);

  // encounter routing
  app.get('/api/user/encounter', encounterUtils.showAllEncounters);
  app.post('/api/user/encounter', encounterUtils.createEncounter);
  app.get('/api/recentactivity', encounterUtils.recentactivity);

  // app.post('/api/searchanimal', someController);
  // app.get('/api/friends/recentactivity', someController)
};



var userUtils = require('../config/userUtils.js')

var User = db.Model.extend({

  tableName: 'users',

  signUp: userUtils.newUser,

  signIn: userUtils.createSession,

  signOut: userUtils.endSession,

  initialize: userUtils.initializeNewUser,

  comparePassword: userUtils.comparePassword,

  hashPassword: userUtils.hashPassword,

  checkIfLoggedIn: userUtils.isLoggedIn,
  // ignoring the below since we don't care right now
  // hasTimestamps: true,
});

module.exports = User;




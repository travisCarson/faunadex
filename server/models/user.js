var db = require('../config/db.js');
var bookshelf = require('bookshelf');
var userUtils = require('../config/userUtils.js')

var User = db.Model.extend({

  tableName: 'users',

  initialize: function() {
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },
  hashPassword: function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
    });
  },

  // ignoring the below since we don't care right now
  // hasTimestamps: true,

});

module.exports = User;




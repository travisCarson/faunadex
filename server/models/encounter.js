var db = require('../config/db.js');
require('./user');
require('./post');

var Encounter = db.Model.extend({
  tableName: 'encounters',
  
  posts: function() {
    return this.hasMany('Post', 'encounterid');
  },

  user: function() {
    return this.belongsTo('User', 'userid');
  }
});

module.exports = db.model('Encounter', Encounter);

var db = require('../config/db.js');
var bookshelf = require('bookshelf');
var User = require('./user');

var Encounter = db.Model.extend({
	tableName: 'encounters',
  
  user: function() {
    return this.belongsTo(User, 'userid');
  }
});

module.exports = Encounter;
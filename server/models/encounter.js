var db = require('../config/db.js');
require('./user');

var Encounter = db.Model.extend({
  tableName: 'encounters',
  
  user: function() {
    return this.belongsTo('User', 'userid');
  }
});

module.exports = db.model('Encounter', Encounter);

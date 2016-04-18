var db = require('../config/db.js');
require('./encounter');

var Post = db.Model.extend({
  tableName: 'posts',
  
  encounter: function() {
    return this.belongsTo('Encounter', 'encounterid');
  }
});

module.exports = db.model('Post', Post);

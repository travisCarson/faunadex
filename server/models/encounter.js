var db = require('../config/db.js');
var bookshelf = require('bookshelf');

var Encounter = db.Model.extend({
	tableName: 'encounters',

});

module.exports = Encounter;
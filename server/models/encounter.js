var db = require('../config/db.js');
var knex = require('knex');
var bookshelf = require('bookshelf');

var Encounter = db.Model.extend({
	tableName: 'encounters',

});

module.exports = Encounter;
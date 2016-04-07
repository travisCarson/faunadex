require db = ('../config/db.js');
var knex = require('knex');
var bookshelf = require('bookshelf');

var Encounter = db.Model.extend({
	tableName: encounters,
	createEncounter: function() {

	},
	showAllEncounters: function() {

	},
	recentActivity: function() {

	}
})

module.exports = Encounter;
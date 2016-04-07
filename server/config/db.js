var knex = require('knex');
var bookshelf = require('bookshelf')(knex);

var db = Bookshelf.initialize({
	client: 'postgresql',
	connection: {
		host: 'localhost',
		user: '', //tbd
		password: '', //tbd
		database: '', //faunadex-db
		charset: 'utf-8'
	}
})
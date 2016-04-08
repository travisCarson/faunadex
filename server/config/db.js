var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: '', //tbd
    password: '', //tbd
    database: '', //faunadex-db
    charset: 'utf-8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
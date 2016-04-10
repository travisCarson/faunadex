var knex = require('knex')({
  client: 'mysql',
  connection: {
    user: 'root', //tbd
    database: 'faunadex',
    host: 'localhost',
    password: 'fordevonly', //tbd
    charset: 'utf-8',
  }
});

var bookshelf = require('bookshelf')(knex);

// potential code create server
// see http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#.VwgFNhMrJTY for more
// var pg = require('pg');

// // connect postgres
// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
// var client = new pg.Client(connectionString);
// client.connect();

module.exports = bookshelf;

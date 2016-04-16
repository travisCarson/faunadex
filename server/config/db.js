var knex = require('knex')({
  client: 'mysql',
  connection: {
    user: 'root', //tbd
    database: 'faunadex',
    host: 'localhost',
    password: 'fordevonly', //tbd
  }
});

var bookshelf = require('bookshelf')(knex);

// Resolve circular dependencies of models with the plugin below
// See https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry for more information
bookshelf.plugin('registry');

module.exports = bookshelf;

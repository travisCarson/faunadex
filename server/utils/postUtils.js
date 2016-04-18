var db = require('../config/db.js');
var Encounter = require('../models/encounter');
var Post = require('../models/post');
var knex = require('knex');
var bookshelf = require('bookshelf');

module.exports = {

  createPost: function(req, res) {
    new Post({
      encounterid: req.body.encounterid,
      userid: req.body.userid,
      message: req.body.message,
      posttime: new Date()
    }).save()
      // send back a status code to signify success and the encounter for the front-end to use (if necessary)
      .then(function(post) {
        res.status(200).json(post);
      })
      .catch(function(error) {
        res.status(500).send(error.message);
      });
  },

  showAllPostsForEncounter: function(req, res) {
    new Encounter({ id: req.params.encounterid })
      .fetch({withRelated: ['posts']})
      .then(function(encounter) {
        res.status(200).send({posts: encounter.related('posts')});
      })
      // catch will respond with an empty array if the user doesn't have any encounters
      .catch(function(error) {
        res.status(200).send({posts: []});
      });
  }

};

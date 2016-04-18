var db = require('../config/db.js');
var User = require('../models/user');
var Users = require('../collections/users');
var Encounter = require('../models/encounter');
var Encounters = require('../collections/encounters');
var knex = require('knex');
var bookshelf = require('bookshelf');

module.exports = {

  createEncounter: function(req, res) {
    console.log(req.body);
    Encounters.create({
      userid: req.body.userid,
      // forumid: req.body.forumid,
      title: req.body.title,
      animal: req.body.animalType,
      scientificname: req.body.scientificName,
      description: req.body.description,
      location: req.body.location,
      encountertime: req.body.encountertime,
      photo: req.body.photo,
      posttime: new Date()
    })
      // send back a status code to signify success and the encounter for the front-end to use (if necessary)
      .then(function(encounter) {
        console.log('encounter created');
        res.status(200).json(encounter);
      })
      .catch(function(error) {
        console.log('error creating encounter');
        res.status(500).send(error.message);
      });
  },

  showAllEncountersFromUser: function(req, res) {
    new User({ username: req.params.userName })
      .fetch({withRelated: ['encounters']})
      .then(function(user) {
        res.status(200).send({username: user.get('username'), encounters: user.related('encounters')});
      })
      // catch will respond with an empty array if the user doesn't have any encounters
      .catch(function(error) {
        res.status(200).send({encounters: []});
      });
  },

  recentEncounters: function(req, res) {
    Encounters.reset()
      .fetch({withRelated: ['user']})
      .then(function(encounters) {
        // return the last five encounters
        res.status(200).send(encounters.slice(encounters.length - 5));
      })
      .catch(function(error) {
        res.status(500).send(error.message);
      });
  },

  retrieveEncounterById: function(req, res) {
    console.log('retrieveEncounterById called with request: ', req.body.id);
    new Encounter( { id: req.body.id } )
    .fetch()
    .then(function(encounter) {
      res.status(200).send(encounter);
    })
    .catch(function(error) {
      res.status(500).send(error.message);
    });
  },

};

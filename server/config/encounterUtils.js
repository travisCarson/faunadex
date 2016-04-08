var db = require('../config/db.js');
var User = require('../models/user');
var Users = require('../collections/users');
var Encounter = require('../models/encounter');
var Encounters = require('../models/encounters');
var knex = require('knex');
var bookshelf = require('bookshelf');

module.exports = {

  createEncounter: function() {
    Encounters.create({
      title: req.body.title,
      // TODO add description to schema.sql encounter table
      description: req.body.description,
      location: req.body.location,
      encountertime: req.body.encountertime,
      posttime: new Date()
    })
      // send back a status code to signify success and the encounter for the front-end to use (if necessary)
      .then(function(encounter) {
        res.status(200).send(encounter);
      })
      .catch(function(error) {
        res.status(500).send(error.message);
      });
  },

  showAllEncounters: function() {
    // TODO run .reset() on Encounters before fetch()
    Encounters.fetch()
      .then(function(encouters) {
        res.status(200).send(encouters);
      })
      .catch(function(error) {
        res.status(500).send(error.message);
      });
  },

  recentActivity: function() {
    Encounters.reset().fetch()
      .then(function(encouters) {
        // return the last five encounters
        res.status(200).send(encounters.model.slice(encounters.model.length - 6));
      })
      .catch(function(error) {
        res.status(500).send(error.message);
      });
  }

};

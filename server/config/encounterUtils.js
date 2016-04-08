var db = require('../config/db.js');
var User = require('../models/user');
var Users = require('../collections/users');
var Encounter = require('../models/encounter');
var Encounters = require('../models/encounters');
var knex = require('knex');
var bookshelf = require('bookshelf');

module.exports = {

  createEncounter: function() {
    // TODO add description to schema.sql encounter table
    Encounters.create({
      title: req.body.title,
      location: req.body.location,
      encountertime: req.body.encountertime,
      posttime: new Date()
    })
    .then(function(encounter) {
      res.status(200).send(encounter);
    })
    .catch(function(error) {
      res.status(500).send(error.message);
    });
  },

  showAllEncounters: function() {

  },

  recentActivity: function() {

  }

};
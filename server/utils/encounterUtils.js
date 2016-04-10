var db = require('../config/db.js');
var User = require('../models/user');
var Users = require('../collections/users');
var Encounter = require('../models/encounter');
var Encounters = require('../collections/encounters');
var knex = require('knex');
var bookshelf = require('bookshelf');

// dummy file with dummy info
var dummy = require('../../dummies/dummies');

module.exports = {

  createEncounter: function() {
    Encounters.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      encountertime: req.body.encountertime,
      posttime: new Date()
    })
      // send back a status code to signify success and the encounter for the front-end to use (if necessary)
      .then(function(encounter) {
        res.status(200).json(encounter);
      })
      .catch(function(error) {
        res.status(500).send(error.message);
      });
  },

  showAllEncounters: function() {
    res.status(200).json(dummy.dummyEncounter);
  },
  // function to interact with the database
  // showAllEncounters: function() {
  //   Encounters.reset().fetch()
  //     .then(function(encouters) {
  //       res.status(200).send(encouters);
  //     })
  //     .catch(function(error) {
  //       res.status(500).send(error.message);
  //     });
  // },

  recentActivity: function() {
    res.status(200).json(dummy.dummyEncounter);
    // function to interact with the database
    // Encounters.reset().fetch()
    //   .then(function(encouters) {
    //     // return the last five encounters
    //     res.status(200).send(encounters.model.slice(encounters.model.length - 6));
    //   })
    //   .catch(function(error) {
    //     res.status(500).send(error.message);
    //   });
  }

};

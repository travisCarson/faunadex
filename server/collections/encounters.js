var db = require('../config/db');
var Encounter = require('../models/encounters/encounter-model');

var Encounters = new db.Collection();

Encounters.model = Encounter;

module.exports = Encounters;
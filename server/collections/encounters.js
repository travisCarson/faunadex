var db = require('../config/db');
var Encounter = require('../models/encounter');

var Encounters = new db.Collection();

Encounters.model = Encounter;

module.exports = Encounters;
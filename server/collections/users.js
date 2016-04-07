
var db = require('../config/db');
var User = require('../models/users/user-model');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;
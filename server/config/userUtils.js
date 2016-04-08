var request = require('request');
var db = require('../config/db.js');
var knex = require('knex');
var bookshelf = require('bookshelf');
var bcrypt = require('bcrypt-nodejs');
// we may need the following line, not sure, it may be included in request
// var session = require('request-session');

exports.newUser = function(req) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        bcrypt.hash(password, null, null, function(err, hash) {
          Users.create({
            username: username,
            password: hash
          }).then(function(user) {
              util.createSession(req, res, user); 
          });
        });
      }
  });
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    req.session.user = newUser;
    res.redirect('/');
  });
};

exports.endSession = function(req, res, user) {
  return req.session.destroy(function(err) {
    console.log('Error logging out user!');
  };
};

var isLoggedIn = function(req) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next){
  if (!isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

exports.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};

exports.hashPassword = function() {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
    .then(function(hash) {
      this.set('password', hash);
  });
};

exports.initializeNewUser = function() {
  this.on('creating', this.hashPassword);
};
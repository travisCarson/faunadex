var db = require('../config/db.js');
var knex = require('knex');
var bookshelf = require('bookshelf');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.js');

exports.createUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save()
          .then(function(newUser) {
            exports.createSession(req, res, newUser);
            res.json({username: newUser.get('username')});
          });
      } else {
        console.log('Account already exists');
        res.json(undefined);
      }
    });
};

exports.signInUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username})
    .fetch()
    .then(function(user) {
      if (!user) {
        console.log('user not found');
        res.json({ error: 'Your username or password did not match' });
      } else {
        user.comparePassword(password, function(isMatch) {
          if (isMatch) {
            exports.createSession(req, res, user);
            console.log('session created');
            res.json({username: user.get('username')});
          } else {
            console.log('error signing in');
            res.json({ username: null, error: 'Your username or password did not match' });
          }
        });
      }
    });
};

exports.createSession = function(req, res, newUser) {
  req.session.user = newUser;
};

exports.endSession = function(req, res, user) {
  return req.session.destroy(function(err) {
    if (err) {
      console.log('Error signing out user!');
    }
    res.redirect('/');
  });
};

exports.isSignedIn= function(req, res) {
  if (req.session.user) {
    res.json(true);
  } else {
    res.json(false);
  }
};

exports.checkUser = function(req, res, next){
  if (!isSignedIn(req)) {
    return false;
  } else {
    next();
  }
};


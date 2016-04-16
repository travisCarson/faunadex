var db = require('../config/db.js');
var knex = require('knex');
var bookshelf = require('bookshelf');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.js');
var jwt = require('jwt-simple');
var secret = 'cats have no wit but have spices';

var createSession = function(req, res, user) {
  req.session.user = user;
  var token = jwt.encode(user, secret);
  res.json({
    username: user.get('username'),
    token: token
  });
  console.log('session created');
}

exports.signOutUser = function(req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err.message);
    }
  });
}

exports.createUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        new User({ username: username, password: password })
          .save()
          .then(function(newUser) { 
            createSession(req, res, newUser); 
          });
      } else {
        res.json({ username: null, error: 'Account already exists' });
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
        res.json({ username: null, error: 'Your username or password did not match' });
      } else {
        user.comparePassword(password, function(isMatch) {
          if (isMatch) {
            createSession(req, res, user); 
          } else {
            res.json({ username: null, error: 'Your username or password did not match' });
          }
        });
      }
    });
};

exports.getSignedInUser = function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token) {
    res.sendStatus(401);
  } else {
    var user = jwt.decode(token, secret);
    new User({ username: user.username })
      .fetch()
      .then(function (foundUser) {
        if (foundUser) {
          res.json({ username: user.username });
        } else {
          res.sendStatus(401);
        }
      });
  }
}

exports.authenticationRequired = function(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) {
    res.sendStatus(401);
  } else {
    var user = jwt.decode(token, secret);
    new User({ username: user.username })
      .fetch()
      .then(function (foundUser) {
        if (foundUser) {
          next();
        } else {
          res.sendStatus(401);
        }
      });
  }
};


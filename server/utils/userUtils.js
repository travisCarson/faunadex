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
            util.createSession(req, res, newUser);
          });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
};

exports.logInUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username, password);

  new User({ username: username})
    .fetch()
    .then(function(user) {
      if (!user) {
        console.log('user not found');
        res.redirect('/#/signin');
      } else {
        user.comparePassword(password, function(isMatch) {
          if (isMatch) {
            exports.createSession(req, res, user);
            console.log('session created');
            res.json(user);
      
          } else {
            console.log('error logging in');
            res.redirect('/#/signin');
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
      console.log('Error logging out user!');
    }
    res.redirect('/#/signin');
  });
};

exports.isLoggedIn = function(req, res) {
  console.log(req.session);
  if (req.session.user) {
    res.send('true');
  } else {
    res.send('false');
  }
};

exports.checkUser = function(req, res, next){
  if (!isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};


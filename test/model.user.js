var expect = require('chai').expect;

var db = require('../server/config/db.js');
var User = require('../server/models/user.js');
var userUtils = require('../server/utils/userUtils.js');
var bcrypt = require('bcrypt-nodejs');

var serverURL = 'http://127.0.0.1:1337';

describe('User Model & User Utilities', function () {
  describe('Database', function () {
    it('will connect', function (done) {
      db.knex.raw('SELECT 1+1 AS solution').then(function (response) {
        expect(response[0][0].solution).to.equal(2);
        done();
      });
    });

    it('has a user table', function (done) {
      db.knex.raw('SHOW TABLES LIKE \'users\'').then(function (response) {
        expect(response[0].length).to.equal(1);
        done();
      });
    });

  });

  describe('Model Methods', function() {
    it('will create a new user with .save()', function(done) {
      new User({username: 'bob12345678', password: 'bob'}).save()
        .then(function (user) {
          expect(user).to.not.be.null;
          done();
        });
    });

    it('will hash a password when creating a new user', function(done) {
      new User({username: 'bob12345678'}).fetch()
        .then(function (user) {
          expect(user.get('password')).to.not.equal('bob12345678');
          done();
        });
    });
    
    it('.comparePassword() will return true with a good password', function(done) {
      new User({username: 'bob12345678'}).fetch()
        .then(function (user) {
          user.comparePassword('bob', function (isMatch)  {
            expect(isMatch).to.be.true;
            done();
          });
        });
    });

    it('.comparePassword() will return false with a bad password', function(done) {
      new User({username: 'bob12345678'}).fetch()
        .then(function (user) {
          user.comparePassword('bob12345678bbb', function (isMatch)  {
            expect(isMatch).to.be.false;
            done();
          });
        });
    });

    it('.destroy() will delete the model', function(done) {
      new User({username: 'bob12345678'}).fetch()
        .then(function (user) {
          return user.destroy();
        }).then(function (user) {
          return new User({username: 'bob12345678'}).fetch()
        }).then (function (user) {
          expect(user).to.be.null;
          done();
        });
    });
  });

}); //end describe('basic server functions', function () {


var chai = require('chai');
var expect = chai.expect;
chai.should();
var request = require('supertest');


var db = require('../../server/config/db.js');
var User = require('../../server/models/user.js');
var app = require('../../server/server.js');

//Create an object for testing use
var Site = function() {
  this.username = '';
  this.password = '';
};

Site.prototype.post = function (uri, callback) {
  var data = {
    username: this.username,
    password: this.password
  };
  request.agent(app).post(uri).send(data).withCredentials().redirects(1).expect(200).end(callback);
}

var site = new Site();

//Delete our user if he already exists
new User({ username: 'bob123456', password: 'bob' }).fetch().then (function (user) {
  if (user) {
    user.destroy();
  }
});

//Create a user that we will delete at the end
var bob = new User({ username: 'bob123456', password: 'bob' }).save();

describe('Basic Authentication', function () {
  describe('/api/user/signin', function () {
    
    it('will not 404 when POST to /api/user/signin', function (done) {
      site.username = 'nancy';
      site.post('/api/user/signin', function(error, res) {
        expect(error).to.equal(null);
        done();
      });
    });

    it('will not sign a user in with improper credentials, and redirect to login page', function (done) {
      site.username = 'bob123456';
      site.post('/api/user/signin', function(error, res) {
        expect(error).to.equal(null);
        request.agent(app).get('/#/dashboard').expect(200).end(function(err, res) {
          res.text.should.include('Sign In');
          done();
        })
      });
    });

    it('will sign a user in with proper credentials', function (done) {
      site.username = 'bob123456';
      site.password = 'bob';
      site.post('/api/user/signin', function(error, res) {
        expect(error).to.equal(null);
        request.agent(app).get('/#/dashboard').expect(200).end(function(err, res) {
          res.text.should.not.include('Sign In');
          done();
        })
      });
    });

  }); //END describe('Basic REST API endpoints' function () {

}); //END describe('Basic Server Functions', function () {


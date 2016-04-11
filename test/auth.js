var expect = require('chai').expect;
var request = require('supertest');

var db = require('../server/config/db.js');
var User = require('../server/models/user.js');
var app = require('../server/server.js');

var Site = function() {
  this.username = 'bob12345678';
  this.password = 'bob';
};

Site.prototype.post = function (uri, callback) {
  var data = {
    username: this.username,
    password: this.password
  };
  request.agent(app).post(uri).send(data).withCredentials().redirects(1).expect(200).end(callback);
}

var site = new Site();

describe('Basic Authentication', function () {
  describe('/api/user/signin', function () {
    
    it('will not 404 when POST to /api/user/signin', function (done) {
      site.post('/api/user/signin', function(error, res) {
        expect(error).to.equal(null);
        done();
      });
    });

    xit('will not sign a user in with improper credentials', function (done) {
      site.password = '';
      site.post('/api/user/signin', function(error, res) {
        expect(error).to.equal(null);
      });
    });

    xit('will sign a user in with proper credentials', function (done) {

    });

  }); //END describe('Basic REST API endpoints' function () {

}); //END describe('Basic Server Functions', function () {


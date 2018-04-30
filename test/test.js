var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
	  it('respond with cloudview', function(done) {
		      request(app).get('/').expect('sys admin cloudview', done);
		    });
});

var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
	  it('respond with cloudview', function(done) {
		      request(app).get('/').expect('3sys admin cloudview', done);
		    });
});

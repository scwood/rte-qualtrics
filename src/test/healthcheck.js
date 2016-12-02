var request = require('supertest');
var assert = require('assert');
var sinon = require('sinon');
var app = require('../server/app');
var qsystem = require('qsystem');
var config = qsystem.getConfig();

describe(config.basepath +'healthcheck', function(){
	it('get: should return a 200 status ok', function (done) {
		request(app)
			.get(config.basepath + 'healthcheck')
			.expect(200,{status:"ok"},done);
	});
});

var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var chai = require('chai');
var should = chai.should();
var Lightsaber = require('..\\logic\\lightsaber.js'); 



describe("Lightsabers - ",	function(){
	it('when created should be off', function() {
			var ls = new Lightsaber();
			ls.isOn().should.equal(false);
		});
	
	it ('when turned on should be on', function(){
		var ls = new Lightsaber();
		ls.turnOn();
		ls.isOn().should.equal(true);
	});
	
});
business = require("../app/scripts/business-logic").business;
expect = require("chai").expect;

describe("business logic", function () {
	
	it("should open the main area", function () {
		var result = business.openMainArea()[0];
		expect(result.selector).to.equal("#mainArea");
		expect(result.method).to.equal("removeClass");
		expect(result.value).to.equal("hidden");
	});
	
	it("should close the main area", function () {
		var result = business.closeMainArea()[0];
		expect(result.selector).to.equal("#mainArea");
		expect(result.method).to.equal("addClass");
		expect(result.value).to.equal("hidden");
	});
	
	it("should multiply", function () {
		var result = business.compute(2, 3, "mult")[0];
		expect(result.value).to.equal("Result: 6");
	});
	
	it("should add", function () {
		var result = business.compute(2, 3, "plus")[0];
		expect(result.value).to.equal("Result: 5");
	});
	
	it("should complain about operator", function () {
		var result = business.compute(2, 3, "not-an-operator")[0];
		expect(result.value).to.equal("Result: Error (unknown operator)");
	});

});
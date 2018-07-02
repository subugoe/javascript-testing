business = require("../business-logic").business;
expect = require("chai").expect;

log = console.log;

describe("test1", function () {
	it("should bla", function () {
		var result = business.openMainArea();
		expect(result[0].method).to.be.true;
	});
});
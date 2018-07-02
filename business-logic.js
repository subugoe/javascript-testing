'use strict';

var business = {
	openMainArea: function () {
		var newStates = [
			{ selector: "#closeButton", method: "removeClass", value: "hidden" },
			{ selector: "#openButton", method: "addClass", value: "hidden" },
			{ selector: "#mainArea", method: "removeClass", value: "hidden" }	
		];		
		return newStates;
	},
	closeMainArea: function () {
		var newStates = [
			{ selector: "#closeButton", method: "addClass", value: "hidden" },
			{ selector: "#openButton", method: "removeClass", value: "hidden" },
			{ selector: "#mainArea", method: "addClass", value: "hidden" }			
		];
		return newStates;		
	}
};

module.exports = {
		business
}

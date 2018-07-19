'use strict';

var business = {
	openMainArea: function () {
		var newStates = [
			{ selector: "#mainArea", method: "removeClass", value: "hidden" },
			{ selector: "#openButton", method: "addClass", value: "hidden" },
			{ selector: "#closeButton", method: "removeClass", value: "hidden" },
		];		
		return newStates;
	},
	closeMainArea: function () {
		var newStates = [
			{ selector: "#mainArea", method: "addClass", value: "hidden" },
			{ selector: "#closeButton", method: "addClass", value: "hidden" },
			{ selector: "#openButton", method: "removeClass", value: "hidden" },
		];
		return newStates;		
	},
	compute: function (number1, number2, operator) {
		var result;
		if (operator === "mult") {
			result = number1 * number2;
		} else if (operator === "plus") {
			result = parseInt(number1) + parseInt(number2);
		} else {
			result = "Error (unknown operator)";
		}
		var newStates = [
			{ selector: "#result", method: "setText", value: "Result: " + result }
		];
		return newStates;
	}
};

if (typeof module != 'undefined') {
	module.exports = {
		business
	}
}

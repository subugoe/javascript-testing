'use strict';

document.addEventListener('DOMContentLoaded', function() {
	function id(elemId) {
		return document.getElementById(elemId);
	}
	function select(elemSelector) {
		return document.querySelector(elemSelector);
	}
	
	id("openButton").onclick = function () {
		const newStates = business.openMainArea();
		domChanger.applyStates(newStates);
	};
	id("closeButton").onclick = function() {
		const newStates = business.closeMainArea();
		domChanger.applyStates(newStates);
	};
	id("computeButton").onclick = function () {
		const number1 = id("firstNumber").value;
		const number2 = id("secondNumber").value;
		const operator = select("input[name='operand']:checked").value;

		const newStates = business.compute(number1, number2, operator);
		domChanger.applyStates(newStates);
	};
});
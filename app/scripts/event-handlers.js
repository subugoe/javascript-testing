'use strict';

document.addEventListener('DOMContentLoaded', function() {
		function id(elemId) {
			return document.getElementById(elemId);
		}
		function selector(elemSelector) {
			return document.querySelector(elemSelector);
		}
		
		id("openButton").onclick = function () {
			var newStates = business.openMainArea();
			domChanger.applyStates(newStates);
		};
		id("closeButton").onclick = function() {
			var newStates = business.closeMainArea();
			domChanger.applyStates(newStates);
		};
		id("computeButton").onclick = function () {
			var number1 = id("firstNumber").value;
			var number2 = id("secondNumber").value;
			var operator = selector("input[name='operand']:checked").value;;

			var newStates = business.compute(number1, number2, operator);
			domChanger.applyStates(newStates);
		};
});
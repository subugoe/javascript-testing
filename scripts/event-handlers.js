'use strict';

$(document).ready(function () {
		$("#openButton").click(function () {
			var newStates = business.openMainArea();
			domWriter.applyStates(newStates);
		});
		$("#closeButton").click(function () {
			var newStates = business.closeMainArea();
			domWriter.applyStates(newStates);
		});
		$("#computeButton").click(function () {
			var number1 = $("#firstNumber").val();
			var number2 = $("#secondNumber").val();
			var operator = $("#radioButtons input[name='operand']:checked").val();
			
			var newStates = business.compute(number1, number2, operator);
			domWriter.applyStates(newStates);
		});
});
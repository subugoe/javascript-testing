'use strict';

var domAccess = {
		applyStates: function (newStates) {
			newStates.forEach((el) => this[el.method](el.selector, el.value));
		},
		removeClass: function(selector, value) {
			$(selector).removeClass(value);
		},
		addClass: function (selector, value) {
			$(selector).addClass(value);
		},
		setText: function (selector, value) {
			$(selector).html(value);
		}
};

$(document).ready(function () {
		$("#openButton").click(function () {
			var newStates = business.openMainArea();
			domAccess.applyStates(newStates);
		});
		$("#closeButton").click(function () {
			var newStates = business.closeMainArea();
			domAccess.applyStates(newStates);
		});
		$("#computeButton").click(function () {
			var number1 = $("#firstNumber").val();
			var number2 = $("#secondNumber").val();
			var operator = $("#radioButtons input[name='operand']:checked").val();
			
			var newStates = business.compute(number1, number2, operator);
			domAccess.applyStates(newStates);
		});
});
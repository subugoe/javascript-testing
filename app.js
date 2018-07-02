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
});
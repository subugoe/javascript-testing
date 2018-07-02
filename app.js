'use strict';

var domAccess = {
		applyStates: function (newStates) {
			for (var i = 0; i < newStates.length; i++) {
				var current = newStates[i];
				this[current.method](current.selector, current.value);
			}
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
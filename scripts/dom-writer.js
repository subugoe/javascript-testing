'use strict';

var domWriter = {
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

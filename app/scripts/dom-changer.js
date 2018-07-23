'use strict';

var domChanger = {
	applyStates: function (newStates) {
		newStates.forEach(state => {
			const elemsToChange = document.querySelectorAll(state.selector);
			elemsToChange.forEach(elem => this[state.method](elem, state.value));
		});
	},
	removeClass: function(element, className) {
		element.classList.remove(className);
	},
	addClass: function (element, className) {
		element.classList.add(className);
	},
	setText: function (element, text) {
		element.innerText = text;
	}
};

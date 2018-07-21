'use strict';

var domChanger = {
	applyStates: function (newStates) {
		newStates.forEach(state => {
			const elemsToChange = document.querySelectorAll(state.selector);
			for (let i = 0; i < elemsToChange.length; i++) {
				this[state.method](elemsToChange[i], state.value);
			}
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

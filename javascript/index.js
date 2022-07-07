let menu_button = document.querySelector('#menu-icon');
let nav = document.querySelector('nav');
let header = document.querySelector('header')

menu_button.addEventListener('click', () => {
	if (nav.getAttribute('visible') === 'false') {
		menu_button.innerText = 'close';
		nav.setAttribute('visible', 'true');
		header.setAttribute('expanded', 'true')
	} else {
		menu_button.innerText = 'menu';
		nav.setAttribute('visible', 'false');
		header.setAttribute('expanded', 'false')

	}
});

function hoverin(card, container, title, image, data, actions) {
	return () => {
		image.setAttribute('hover', 'true');
		title.setAttribute('hover', 'true');
		container.setAttribute('hover', 'true');
		data.setAttribute('hover', 'true');
		actions.setAttribute('hover', 'true');
	};
}
function hoverout(card, container, title, image, data, actions) {
	return () => {
		image.setAttribute('hover', 'false');
		title.setAttribute('hover', 'false');
		container.setAttribute('hover', 'false');
		data.setAttribute('hover', 'false');
		actions.setAttribute('hover', 'false');
	};
}

let cards = document.querySelectorAll('.card');

for (let i of cards) {
	let container = i.querySelector('.container');
	let title = i.querySelector('.title');
	let image = i.querySelector('.image');
	let data = i.querySelector('.data');
	let actions = i.querySelector('.actions');
	i.addEventListener('mouseenter', hoverin(i, container, title, image, data, actions));
	i.addEventListener('focusin', hoverin(i, container, title, image, data, actions));

	i.addEventListener('mouseleave', hoverout(i, container, title, image, data, actions));
	i.addEventListener('focusout', hoverout(i, container, title, image, data, actions));
}

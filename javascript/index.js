let menu_button = document.querySelector('#menu-icon');
let nav = document.querySelector('nav');

menu_button.addEventListener('click', () => {
	if (nav.getAttribute('visible') === 'false') {
		menu_button.innerText = 'close';
		nav.setAttribute('visible', 'true');
	} else {
		menu_button.innerText = 'menu';
		nav.setAttribute('visible', 'false');
	}
});

function hoverin(card, container, title, image, data) {
	return () => {
		image.setAttribute('hover', 'true');
		title.setAttribute('hover', 'true');
		container.setAttribute('hover', 'true');
		data.setAttribute('hover', 'true');
	};
}
function hoverout(card, container, title, image, data) {
	return () => {
		image.setAttribute('hover', 'false');
		title.setAttribute('hover', 'false');
		container.setAttribute('hover', 'false');
		data.setAttribute('hover', 'false');
	};
}

let cards = document.querySelectorAll('.card');

for (let i of cards) {
	let container = i.querySelector('.container');
	let title = i.querySelector('.title');
	let image = i.querySelector('.image');
	let data = i.querySelector('.data');
	i.addEventListener('mouseenter', hoverin(i, container, title, image, data));
	i.addEventListener('mouseleave', hoverout(i, container, title, image, data));
}

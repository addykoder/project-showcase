
let projects = [

	{
		name: 'Project Showcase',
		description: 'description of the project',
		technologies: ['html', 'css', 'javascript'],

		source: 'https://github.com/AddyKoder/project-showcase',
		link: 'https://addykoder.github.io/project-showcase/',

		image: 'project.jpg'
	}

];



function tech(list) {
	let res = '';
	for (let j of list) {
		res += `<img src="assets/icons/${j}.svg" alt="${j}-logo"/>`;
	}
	return res;
}

for (let i of projects) {
	let technologies = tech(i.technologies);
	document.querySelector('.project-display').innerHTML =
		// document.querySelector('.project-display').innerHTML +
		`
		<div class="card">
					<div class="title" hover="false">
						${i.name}
						<div class="actions" hover="false">
							<a href="${i.source}" target="_blank">
								<img src="assets/icons/github.svg" alt="github-logo"/>
							</a>

							<a href="${i.link}" target="_blank">
								<img src="assets/icons/link.svg" alt="github-logo" />
							</a>
						</div>
					</div>

					<div class="container" hover="false">
						<div class="data" hover="false">
							<p>${i.description}</p>

							<div class="technologies list">
								${technologies}
							</div>
						</div>
					</div>

					<div class="image" hover="false">
						<img src="assets/images/${i.image}" alt="${i.name}-project-image"/>
					</div>
				</div>
		`;
}
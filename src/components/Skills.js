import React from 'react';

function Skill () {

	const iconsData = [
		{ url: 'https://nodejs.org/en/', svg: 'node.svg' },
		{ url: 'https://www.php.net/', svg: 'php.svg' },
		{ url: 'https://lumen.laravel.com/', svg: 'lumen.svg' },
		// { url: 'https://laravel.com/', svg: 'laravel.svg' },
		{ url: 'https://www.typescriptlang.org/', svg: 'ts.svg'},
		{ url: 'https://www.w3schools.com/js/DEFAULT.asp', svg: 'js.svg' },
		{ url: 'https://www.mui.com/', svg: 'material-ui.svg' },
		{ url: 'https://reactjs.org/', svg: 'react.svg' },
		{ url: 'https://redux.js.org/', svg: 'redux.svg' },
		{ url: 'https://angular.io/', svg: 'angular.svg'},
		{ url: 'https://www.mongodb.com/', svg: 'mongodb.svg' },
		{ url: 'https://www.mysql.com/', svg: 'mysql.svg' },
		{ url: 'https://firebase.google.com/', svg: 'firebase.svg' },
		{ url: 'https://getbootstrap.com/', svg: 'bs.svg' },
		// { url: 'https://ubuntu.com/', svg: 'ubuntu.svg' },
		// { url: 'https://www.microsoft.com/en-ph/windows', svg: 'windows.svg' },
		{ url: 'https://git-scm.com/', svg: 'git.svg'},
		{ url: 'https://bitbucket.org/', svg: 'bb.svg'},
	]

	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
			<div className="w-100">
				<h2 className="mb-5 wow slideInLeft text-secondary">Skills</h2>
				<div className="skill-container">
					{
						iconsData.map(icon => (
							<a href={icon.url} target="_blank"><img className="shake-slow skill-img" src={"assets/img/svg/" + icon.svg}/></a>
						))
					}
				</div>
			</div>
		</section>
	)
}

export default Skill;
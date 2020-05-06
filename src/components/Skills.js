import React, { Component, Fragment } from 'react';
import 'devicon/devicon.css';

class Skill extends Component {
	render() {
		return (
			<Fragment>
			    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
			        <div className="w-100">
			            <h2 className="mb-5 wow slideInLeft text-secondary">Skills</h2>

			            <div className="subheading mb-4 wow zoonIn">Programming Languages &amp; Tools</div>

			            <ul className="list-inline dev-icons wow fadeInUp">
			                <li className="list-inline-item p-2">
			                    <a href="https://www.photoshop.com/en" className="text-secondary" target="_blank"><i class="devicon-photoshop-line colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" className="text-secondary" target="_blank"><i class="devicon-css3-plain-wordmark colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://git-scm.com/" className="text-secondary" target="_blank"><i class="devicon-git-plain colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://bitbucket.org/" className="text-secondary" target="_blank"><i class="devicon-bitbucket-plain-wordmark colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://trello.com/" className="text-secondary" target="_blank"><i class="devicon-trello-plain colored fa-2x"></i></a>
			                </li>
			            </ul>
			            <ul className="list-inline dev-icons wow fadeInUp">
			                <li className="list-inline-item p-2">
			                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-secondary" target="_blank"><i className="devicon-javascript-plain colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://jquery.com/" className="text-secondary" target="_blank"><i className="devicon-jquery-plain-wordmark colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://www.php.net/manual/en/" className="text-secondary" target="_blank"><i className="devicon-php-plain fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://laravel.com/" className="text-secondary" target="_blank"><i className="devicon-laravel-plain-wordmark colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://reactjs.org/" className="text-secondary" target="_blank"><i className="devicon-react-original-wordmark colored fa-2x"></i></a>
			                </li>
			            </ul>
			            <ul className="list-inline dev-icons wow fadeInUp">
			                <li className="list-inline-item p-2">
			                    <a href="https://nodejs.org/" className="text-secondary" target="_blank"><i className="devicon-nodejs-plain colored fa-2x"></i></a>
			                </li>

			                <li className="list-inline-item p-2">
			                    <a href="https://www.mysql.com/" className="text-secondary" target="_blank"><i className="devicon-mysql-plain-wordmark colored fa-2x"></i></a>
			                </li>

			                <li className="list-inline-item p-2">
			                    <a href="https://www.mongodb.com/" className="text-secondary" target="_blank"><i className="devicon-mongodb-plain-wordmark colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://www.mongodb.com/" className="text-secondary" target="_blank"> <i class="devicon-postgresql-plain-wordmark colored fa-2x"></i></a>
			                </li>
			                <li className="list-inline-item p-2">
			                    <a href="https://ubuntu.com/" className="text-secondary" target="_blank"><i className="devicon-ubuntu-plain-wordmark colored fa-2x"></i></a>
			                </li>
			            </ul>
			        </div>
			    </section>
			</Fragment>
		)
	}
}

export default Skill;
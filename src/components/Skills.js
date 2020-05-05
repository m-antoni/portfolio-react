import React, { Component, Fragment } from 'react';
import 'devicon/devicon.css';

class Skill extends Component {
	render() {
		return (
			<Fragment>
	          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
	            <div className="w-100">
	              <h2 className="mb-5">Skills</h2>

	              <div className="subheading mb-3">Programming Languages &amp; Tools</div>
	              <ul className="list-inline dev-icons"> 
	              	<li className="list-inline-item">
	                  	<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-secondary" target="_blank"><i className="devicon-javascript-plain colored fa-2x"></i></a>
	                </li>	               	   
	                <li className="list-inline-item">
	                  	<a href="https://jquery.com/" className="text-secondary" target="_blank"><i className="devicon-jquery-plain-wordmark colored fa-2x"></i></a>
	                </li>	
	                <li className="list-inline-item">
	                  	<a href="https://www.php.net/manual/en/" className="text-secondary" target="_blank"><i className="devicon-php-plain fa-2x"></i></a>
	                </li>
	               	<li className="list-inline-item">
	                  	<a href="https://laravel.com/" className="text-secondary" target="_blank"><i className="devicon-laravel-plain colored fa-2x"></i></a>
	                </li>
	               	<li className="list-inline-item">
	                  	<a href="https://reactjs.org/" className="text-secondary" target="_blank"><i className="devicon-react-original colored fa-2x"></i></a>
	                </li>
	                <li className="list-inline-item">
	                  	<a href="https://nodejs.org/" className="text-secondary" target="_blank"><i className="devicon-nodejs-plain colored fa-2x"></i></a>
	                </li>

	                <li className="list-inline-item">
	                 	<a href="https://www.mysql.com/" className="text-secondary" target="_blank"><i className="devicon-mysql-plain-wordmark colored fa-2x"></i></a>
	                </li>

	                <li className="list-inline-item">
	                	<a href="https://www.mongodb.com/" className="text-secondary" target="_blank"><i className="devicon-mongodb-plain-wordmark colored fa-2x"></i></a>
	                </li>
	                <li className="list-inline-item">
	                  	<a href="https://git-scm.com/" className="text-secondary" target="_blank"><i className="devicon-git-plain colored fa-2x"></i></a>
	                </li>
	                <li className="list-inline-item">
	                  	<a href="https://bitbucket.org/" className="text-secondary" target="_blank"><i className="devicon-bitbucket-plain colored fa-2x"></i></a>
	                </li>	    
	                <li className="list-inline-item">
	                  	<a href="https://ubuntu.com/" className="text-secondary" target="_blank"><i className="devicon-ubuntu-plain colored fa-2x"></i></a>
	                </li>	                	                             			
	              </ul>
	            </div>
	          </section>
			</Fragment>
		)
	}
}

export default Skill;
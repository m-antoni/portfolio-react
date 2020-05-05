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
	                  	<i className="devicon-bootstrap-plain colored fa-2x"></i>
	                </li>	 
	              	<li className="list-inline-item">
	                  	<i className="devicon-javascript-plain colored fa-2x"></i>
	                </li>	               	   
	                <li className="list-inline-item">
	                  	<i className="devicon-jquery-plain-wordmark colored fa-2x"></i>
	                </li>	
	                <li className="list-inline-item">
	                  	<i className="devicon-php-plain fa-2x"></i>
	                </li>
	               	<li className="list-inline-item">
	                  	<i className="devicon-laravel-plain colored fa-2x"></i>
	                </li>
	               	<li className="list-inline-item">
	                  	<i className="devicon-react-original colored fa-2x"></i>
	                </li>
	                <li className="list-inline-item">
	                  	<i className="devicon-nodejs-plain colored fa-2x"></i>
	                </li>

	                <li className="list-inline-item">
	                 	<i className="devicon-mysql-plain-wordmark colored fa-2x"></i>
	                </li>
	                <li className="list-inline-item">
	                  	<i className="devicon-postgresql-plain colored fa-2x"></i>
	                </li>
	                <li className="list-inline-item">
	                	<i className="devicon-mongodb-plain-wordmark colored fa-2x"></i>
	                </li>
	                <li className="list-inline-item">
	                  	<i className="devicon-git-plain colored fa-2x"></i>
	                </li>
	                <li className="list-inline-item">
	                  	<i className="devicon-bitbucket-plain colored fa-2x"></i>
	                </li>	    
	                <li className="list-inline-item">
	                  	<i className="devicon-ubuntu-plain colored fa-2x"></i>
	                </li>
	               	<li className="list-inline-item">
	                  	<i className="devicon-photoshop-plain colored fa-2x"></i>
	                </li>		                	                             			
	              </ul>
	            </div>
	          </section>
			</Fragment>
		)
	}
}

export default Skill;
import React, { Component, Fragment } from 'react';
import TypeIt from 'typeit-react';

class About extends Component {
	render() {
		return (
			<Fragment>
			    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
			        <div className="w-100">
			            <h1 className="mb-2 wow fadeInDown"><span>Michael</span>&nbsp;
						          <span className="text-primary wow fadeInRight"> Antoni</span>
						        </h1>
			            <div className="subheadingtop mb-5 wow slideInUp"><i className="fa fa-map-marker"></i> &nbsp;Caloocan City, Philippines
			                <div><i className="fa fa-mobile"></i> &nbsp; 0927-879-8439 |&nbsp; 0939-420-1796</div>
			                <br/>
			                <div><i className="fa fa-envelope"></i>&nbsp;<a href="mailto:codehive2018@gmail.com" className="text-primary"> michaelantoni.cs@gmail.com</a></div>
			                <div><i className="fab fa-github"></i>&nbsp;<a href="https://www.github.com/m-antoni" className="text-primary" target="_blank"> www.github.com/m-antoni</a></div>
			                <div><i className="fab fa-linkedin-in"></i>&nbsp;<a href="https://linkedin.com/in/michaelantoni-cs" className="text-primary" target="_blank"> linkedin.com/in/michaelantoni-cs</a></div>
			                <div><i className="fa fa-address-card"></i>&nbsp; Freelance: <span className="text-success animated infinite flash">Available</span></div>
			            </div>

			            <p className="lead mb-5 wow fadeInRight text-justify">
			                Writing a well designed efficient and maintanable code by using best practices in software development. collaborate with developers that aim to bring the best application that can be use by companies and entrepreneurs around the world.
			            </p>

			            <p className="lead mb-4 text-white">
			                <TypeIt options={{ loop: true, pause: 300, speed: 70, strings: [ "Please Hire Me! Thank You"]}}></TypeIt>
			            </p>

			            <a href="http://michaelantoni.ga/mycv.pdf" download>
			                <button className="btn btn--border text-white wow zoomIn downloadcv mt-2 mr-4" data-wow-delay="1s">
			                    <span> <i className="ti-download"></i> MY CV</span>
			                </button>
			            </a>
			            &nbsp;
			            <a href="http://michaelantoni.ga/myportfolio.pdf" download>
			                <button className="btn btn--border text-white wow zoomIn downloadcv mt-2" data-wow-delay="1s">
			                    <span><i className="ti-agenda"></i> MY PORTFOLIO </span>
			                </button>
			            </a>

			        </div>
			    </section>
			</Fragment>
		)
	}
}

export default About;
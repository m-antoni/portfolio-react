import React, { Component, Fragment } from 'react';
import TypeIt from 'typeit-react';

class About extends Component {
	render() {
		return (
			<Fragment>
			    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
			      <div className="w-100">
			        <h1 className="mb-2 wow fadeInDown"><span>Michael</span>
			          <span className="text-primary wow fadeInRight"> Antoni</span>
			        </h1>
			        <div className="subheadingtop mb-5 wow slideInUp"><i className="fa fa-map-marker"></i> &nbsp;Caloocan City, Philippines 
			          <div><i className="fa fa-mobile"></i> &nbsp; 0927-879-8439 |&nbsp;  0939-420-1796</div>
			          <br/>
			          <div><i className="fa fa-envelope-square"></i>&nbsp;<a href="mailto:codehive2018@gmail.com" className="text-primary"> codehive2018@gmail.com</a></div> 
			          <div><i className="fab fa-github"></i>&nbsp;<a href="https://www.github.com/m-antoni"  className="text-primary"target="_blank"> www.github.com/m-antoni</a></div>
			          <div><i className="fab fa-linkedin-in"></i>&nbsp;<a href="https://linkedin.com/in/michaelantoni-cs"  className="text-primary"target="_blank"> linkedin.com/in/michaelantoni-cs</a></div>
			        </div>
			        <p className="lead mb-5 wow fadeInRight text-justify">
			          I am experienced new technologies when it comes to building web applications. Self-starter in analysis, design and implementations. I am also familiar with Agile methodology and can adapt quickly to new procedures as a part of a team.
			        </p>

			      
			      <h3 id="typingIt" className="subheading mb-4"> </h3> 

			      <a href="http://michaelantoni.ga/mycv.pdf" download>
			        <button className="btn btn--border text-white wow zoomIn downloadcv mt-2 mr-4" data-wow-delay="1s">
			          <span> <i className="ti-download"></i> MY CV
			          </span>
			        </button>
			      </a>

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
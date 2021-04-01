import React from 'react';
import TypeIt from 'typeit-react';
import Switch from "react-switch";

function About () {
	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
			<div className="w-100">	
				<h1 className="mb-2 wow fadeInDown"><span>Michael</span>&nbsp; <span className="text-primary wow fadeInRight"> Antoni</span> </h1>
				<div className="subheadingtop mb-5 wow slideInUp"><i className="fa fa-map-marker"></i> &nbsp;Caloocan City, Metro Manila Philippines
					<div><i className="fa fa-mobile"></i> &nbsp; 0927-879-8439 &nbsp;|&nbsp; 0939-420-1796</div>
					<br/>
					<div><i className="fa fa-envelope"></i>&nbsp;<a href="mailto:michaelantoni.cs@gmail.com" className="text-primary"> michaelantoni.cs@gmail.com</a></div>
					<div><i className="fab fa-github"></i>&nbsp;<a href="https://www.github.com/m-antoni" className="text-primary" target="_blank"> www.github.com/m-antoni</a></div>
					<div><i className="fab fa-linkedin-in"></i>&nbsp;<a href="https://linkedin.com/in/michaelantoni-cs" className="text-primary" target="_blank"> linkedin.com/in/michaelantoni-cs</a></div>
					<div><i className="fas fa-code-branch"></i>&nbsp;<a href="#" className="text-primary"> Freelancing: <span className="text-success wow flash" data-wow-duration="2s" data-wow-iteration="1000">Available</span></a></div>
				</div>

				<p className="subheadingtop lead mb-5 wow fadeInRight">
					"Create the best application that is secured, efficient and maintainable by using the best 
					practices in software development. collaborate with developers that aim to bring the best 
					application built to improve people's lives."
				</p>
				<p className="lead mb-4 text-white">
					<TypeIt options={{ loop: true, pause: 300, speed: 50, strings: [ "Thank You for visiting, Have a nice day"]}}></TypeIt>
				</p>

				<a href="https://drive.google.com/file/d/1lXvpWWyqV3rHqZJKPQWk0MBh2KuXVHi6/view?usp=sharing" target="_blank">
					<button className="btn btn--border text-white wow zoomIn downloadcv mt-2 mr-4" data-wow-delay="1s">
						<span> <i className="ti-download"></i>DOWNLOAD CV</span>
					</button>
				</a>
				&nbsp;
			</div>
		</section>
	)
}

export default About;
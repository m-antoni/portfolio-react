import React from 'react';
import TypeIt from 'typeit-react';

function About () {
	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
			<div className="w-100">	
				<h1 className="mb-2 wow fadeInDown light-name"><span>Michael</span>&nbsp; <span className="wow fadeInRight">Antoni</span> </h1>
				<div className="subheadingtop mb-5 wow slideInUp">
					<div><i className="fab fa-viber"></i>&nbsp;Viber: +639394201796</div>
					<div><i className="fa fa-envelope"></i>&nbsp;<a href="mailto:michaelantoni.cs@gmail.com" className="email-link social-links">michaelantoni.cs@gmail.com</a></div>
					<br/>
					<div><i className="fab fa-linkedin-in"></i>&nbsp;<a href="https://linkedin.com/in/michaelantoni-cs" className="text-primary social-links" target="_blank">linkedin.com/in/michaelantoni-cs</a></div>
					{/* <div><i className="fab fa-instagram"></i>&nbsp;<a href="https://www.instagram.com/michaelantoni.cs/" className="text-primary social-links" target="_blank">instagram.com/michaelantoni.cs</a></div> */}
					<div><i className="fab fa-github"></i>&nbsp;<a href="https://www.github.com/m-antoni" className="text-primary social-links" target="_blank">github.com/m-antoni</a></div>
					<div><i className="fas fa-briefcase"></i>&nbsp;<a href="#" className="text-primary social-links">Freelancing: <span className="text-success wow flash" data-wow-duration="2s" data-wow-iteration="1000">Active</span></a></div>
				</div>

				<p className="subheadingtop lead mb-5 wow fadeInRight">
					Experienced working in the industry with demonstrated design and build applications that secure, efficient and maintainable. 
					by using the best practice in software development. I’m extremely passionate about learning & creating projects that could 
					change and improve people's lives. Aside from programming, I have years of experience handling computer hardware, software, 
					installation, maintenance and troubleshooting.
				</p>
				{/* "Design and build applications that is secured, efficient and maintainable by using the best 
				practice in software development. collaborate with developers that aim to bring the best 
				application built to improve people's lives." */}
				<p className="lead mb-4 text-white type-it">
					<TypeIt options={{ loop: true, pause: 300, speed: 50, strings: [ "Thank You for visiting, Have a nice day"]}}></TypeIt>
				</p>
		

				<a href="https://drive.google.com/file/d/1kbuRbySot9YvZ4zVYr6C6eFeCxkB_jM1/view" target="_blank">
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
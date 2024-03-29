import React from 'react';

function Experience () {
	return (
		<section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
			<div className="w-100">
				<h2 className="mb-5 wow slideInLeft text-secondary">Experience</h2>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Senior Software Engineer</h3>
						<div className="subheading mb-3"><a className="text-primary" href="https://www.accenture.com/ph-en" target="_blank"> Accenture</a></div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Sept 2021 - </span><span className="text-success"><strong>PRESENT</strong></span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Freelance: MERN Stack Developer</h3>
						<div>Project Based only</div>
						<div className="subheading mb-3">Stealth Startup</div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Jan 2022 - Feb 2022</span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Full Stack Web Developer</h3>
						<div className="subheading mb-3"><a className="text-primary" href="https://bluehive.com.ph/" target="_blank"> Bluehive</a></div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Nov 2019 - Sept 2021</span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Web Developer</h3>
						<div className="subheading mb-3">DC Multinational Group of Companies</div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Jun 2019 - Oct 2019</span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Computer Technician</h3>
						<div className="subheading mb-3">Glenmhore Computer World</div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Jul 2014 - Mar 2016</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience;
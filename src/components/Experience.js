import React from 'react';

function Experience () {
	return (
		<section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
			<div className="w-100">
				<h2 className="mb-5 wow slideInLeft text-secondary">Experience</h2>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Application Development Senior Analyst</h3>
						<div className="subheading mb-3"><a className="text-primary" href="https://www.accenture.com/ph-en" target="_blank"> Accenture</a></div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Sept 2021 - </span><span className="text-success"><strong>PRESENT</strong></span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Freelance: Full-Stack Web Developer (Project Base)</h3>
						<div className="subheading mb-3"><a className="text-primary" href="#" target="_blank"> Talently</a></div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Jan 2022 - Feb 2022</span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Full-Stack Web Developer</h3>
						<div className="subheading mb-3"><a className="text-primary" href="https://bluehive.com.ph/" target="_blank"> Bluehive</a></div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Nov 2019 - Sept 2021</span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Web Developer</h3>
						<div className="subheading mb-3"><a className="text-primary" href="https://www.facebook.com/dcgroupintl" target="_blank">DC Multinational Group of Companies</a></div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Jun 2019 - Oct 2019</span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Computer Technician</h3>
						<div className="subheading mb-3">Computer World</div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Jul 2014 - Mar 2016</span>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Technical Staff</h3>
						<div className="subheading mb-3">Monster PrintAds</div>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">Mar 2012 - Jun 2014</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience;
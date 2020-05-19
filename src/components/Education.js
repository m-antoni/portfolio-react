import React from 'react';

function Education () {
		return (
			<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
				<div className="w-100">
					<h2 className="mb-5 wow slideInLeft text-secondary">Education</h2>

					<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
						<div className="resume-content wow fadeInUp">
							<h3 className="mb-0">St. Claire College of Caloocan</h3>
							<div className="subheading mb-2">Bachelor of Science in Computer Science</div>
							<div>Graduate</div>
						</div>
						<div className="resume-date text-md-right">
							<span className="text-primary">2016 - 2019</span>
						</div>
					</div>

					<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
						<div className="resume-content wow fadeInUp">
							<h3 className="mb-0">STI College Fairview</h3>
							<div className="subheading mb-2">Diploma in Information Technology</div>
							<div>2 Year Course</div>
						</div>
						<div className="resume-date text-md-right">
							<span className="text-primary">2005 - 2007</span>
						</div>
					</div>

					<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
						<div className="resume-content wow fadeInUp">
							<h3 className="mb-0">Bagong Silang High School</h3>
							<div className="subheading mb-2"></div>
							<div>Secondary Education</div>
						</div>
						<div className="resume-date text-md-right">
							<span className="text-primary">2001 - 2005</span>
						</div>
					</div>

				</div>
			</section>
		)
}

export default Education;
import React from 'react';

function Awards () {
	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
			<div className="w-100">
				<h2 className="mb-5 wow slideInLeft text-secondary">Awards</h2>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Best Programmer</h3>
						<div className="subheading">Acer Academy Awardee</div>
						<div className="resume-date">2019</div>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Computer Programmer Assistant</h3>
						<div className="subheading">International Certificate Level Royal Institution Singapore</div>
						<div className="resume-date">2019</div>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Best Web Design Award</h3>
						<div className="subheading">St. Clare College of Caloocan</div>
						<div className="resume-date">2017</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Awards;
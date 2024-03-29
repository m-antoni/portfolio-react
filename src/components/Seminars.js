import React from 'react';

function Seminars () {
	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="seminars">
			<div className="w-100">
				<h2 className="mb-5 wow slideInLeft text-secondary">Seminars</h2>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Programmers and Developers Meet Up 8</h3>
						<div className="subheading">
							Microsoft Philippines Inc. <br/>
							6750 Ayala Avenue, 6750., Makati City, Philippines.
						</div>
						
						<div className="mt-2 text-primary resume-date">March 23, 2019</div>
					</div>
				</div>
				
				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">All Out Connect (Learning Beyond The Fundamentals of IT)</h3>
						<div className="subheading">
							Polytechnic University of the Philippines Taguig <br/>
							Gen. Santos Ave., Lower Bicuta Taguig City, Philippines
						</div>
						
						<div className="mt-2 text-primary resume-date">February 10, 2018</div>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">Web Dev Summit 2017 (Ignite The Future of Technology)</h3>
						<div className="subheading">
							Far Eastern University <br/>
							FEU Tech Building, 839 P. Paredes, Sampaloc Metro Manila, Philippines <br/>
						</div>

						<div className="mt-2 text-primary resume-date">November 04, 2017</div>
					</div>
				</div>

				<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="resume-content wow fadeInUp">
						<h3 className="mb-0">The 18th Graphic Expo 2013 (Innovation Beyond Limits)</h3>
						<div className="subheading">
							SMX Convention Center, Mall of Asia <br/>
							123 Seaside Blvd, Pasay, 1300 Metro Manila, Philippines
						</div>

						<div className="mt-2 text-primary resume-date">June 22, 2013</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Seminars;
import React, { Component, Fragment } from 'react';

class Seminars extends Component {
	render() {
		return (
			<Fragment>
				<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="seminars">
				    <div className="w-100">
				        <h2 className="mb-5 wow slideInLeft">Seminars</h2>

				        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
				            <div className="resume-content wow fadeInUp">
				                <h3 className="mb-0">Programmers and Developers Meet Up 8</h3>
				                <div className="subheading">Microsoft Philippines Inc.</div>
				                <div>6750 Ayala Avenue, 6750., Makati City, Philippines.</div>
				                <div className="mt-2 text-primary">March 23, 2019</div>
				            </div>
				        </div>
						
						<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
				            <div className="resume-content wow fadeInUp">
				                <h3 className="mb-0">All Out Connect (Learning Beyond The Fundamentals of IT)</h3>
				                <div className="subheading">Polytechnic University of the Philippines Taguig</div>
				                <div>Gen. Santos Ave., Lower Bicuta Taguig City, Philippines</div>
				                <div className="mt-2 text-primary">February 10, 2018</div>
				            </div>
				        </div>

				        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
				            <div className="resume-content wow fadeInUp">
				                <h3 className="mb-0">Web Dev Summit 2017 (Ignite The Future of Technology)</h3>
				                <div className="subheading">Far Eastern University</div>
				                <div>FEU Tech Building, 839 P. Paredes, Sampaloc Metro Manila, Philippines</div>
				                <div className="mt-2 text-primary">November 04, 2017</div>
				            </div>
				        </div>

				        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
				            <div className="resume-content wow fadeInUp">
				                <h3 className="mb-0">The 18th Graphic Expo 2013 (Innovation Beyond Limits)</h3>
				                <div className="subheading">SMX Convention Center, Mall of Asia</div>
				                <div>123 Seaside Blvd, Pasay, 1300 Metro Manila, Philippines</div>
				                <div className="mt-2 text-primary">June 20, 2013 - June 22, 2013</div>
				            </div>
				        </div>
				    </div>
				</section>
			</Fragment>
		)
	}
}

export default Seminars;
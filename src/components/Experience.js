import React, { Component, Fragment } from 'react';

class Experience extends Component {
	render() {
		return (
			<Fragment>
			    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
			        <div className="w-100">
			            <h2 className="mb-5 wow slideInLeft text-secondary">Experience</h2>

			            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
			                <div className="resume-content wow fadeInUp">
			                    <h3 className="mb-0">Full Stack Web Developer</h3>
			                    <div className="subheading mb-3">Bluehive</div>
			                    <ul>
			                        <li>Full-Stack Engineering</li>
			                        <li>Create Reliable and Maintainable applications</li>
			                        <li>Linux Base Operating System</li>
			                        <li>Follow best practices for efficient and readable codes</li>
			                        <li>Develop and implement the design features and functionality requirements.</li>
			                    </ul>
			                </div>
			                <div className="resume-date text-md-right">
			                    <span className="text-primary">Nov 2019 - </span><span className="text-success"><strong>PRESENT</strong></span>
			                </div>
			            </div>

			            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
			                <div className="resume-content wow fadeInUp">
			                    <h3 className="mb-0">PHP Developer</h3>
			                    <div className="subheading mb-3">DC Multinational Group of Companies</div>
			                    <ul>
			                        <li>Manage CPanel</li>
			                        <li>Implements API Services</li>
			                        <li>Regular upgrades and bug fixing of old projects</li>
			                    </ul>
			                </div>
			                <div className="resume-date text-md-right">
			                    <span className="text-primary">June 2019 - October 2019</span>
			                </div>
			            </div>

			            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
			                <div className="resume-content wow fadeInUp">
			                    <h3 className="mb-0">Head Technician</h3>
			                    <div className="subheading mb-3">Computer World</div>
			                    <ul>
			                        <li>Software and Hardware installation for desktop and laptop computers</li>
			                        <li>Troubleshoot system failures and data restoration</li>
			                        <li>Perform regular upgrades to ensure systems remain updated</li>
			                    </ul>
			                </div>
			                <div className="resume-date text-md-right">
			                    <span className="text-primary">Jul 2014 - Mar 2016</span>
			                </div>
			            </div>

			            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
			                <div className="resume-content wow fadeInUp">
			                    <h3 className="mb-0">Technical Staff</h3>
			                    <div className="subheading mb-3">Monster PrintAds </div>
			                    <ul>
			                        <li>Operate Large Format Printers</li>
			                        <li>Installing Marketing and Advertising Materials</li>
			                        <li>Minimal Graphic Layout Designs</li>
			                    </ul>
			                </div>
			                <div className="resume-date text-md-right">
			                    <span className="text-primary">Mar 2012 - Jun 2014</span>
			                </div>
			            </div>

			        </div>
			    </section>
			</Fragment>
		)
	}
}

export default Experience;
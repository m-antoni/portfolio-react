import React, { Component, Fragment } from 'react';

class Contact extends Component {
	render() {
		return (
			<Fragment>
			    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
			        <div className="w-100">
						<div className="row">
							<div className="col-md-8">
				            	<h2 className="mb-5 wow slideInLeft">Contact</h2>
				                <form>
				                    <div className="form-group wow fadeInUp">
				                        <label><i className="fa fa-envelope"></i> Email</label>
				                        <input type="email" className="form-control form-control-lg" />
				                    </div>
				                    <div className="form-group wow fadeInUp">
				                        <label><i className="fa fa-comment-dots"></i> Message</label>
				                        <textarea className="form-control form-control-lg" rows="4"></textarea>
				                    </div>

				                    <a>
				                        <button type="submit" className="btn btn--border text-white downloadcv my-4 wow fadeInUp" data-wow-delay="1s">
				                            <span> <i className="ti-download"></i>Send Message</span>
				                        </button>
				                    </a>
				                </form>
				            </div>
						</div>
			        </div>
			    </section>
			</Fragment>
		)
	}
}

export default Contact;
import React, { Fragment, useState } from 'react';
import * as emailjs from 'emailjs-com';
import { ToastSuccess, ToastDanger } from './Utils/_toast';
import Swal from 'sweetalert2';

function Contact () {

	const [contact, setContact] = useState({email: '', message: ''});
	const [loading, setLoading] = useState(false);
	
	const handleOnChange = e => setContact({...contact, [e.target.name]: e.target.value});

	const handleOnSubmit = e => {
		e.preventDefault();

		if(email == '' || message == '')
		{
			ToastDanger('Email and Message is required');
		}
		else
		{
			let templateParams = {
				email,
				message,
			}

			setLoading(true);
			emailjs.send('gmail','portfolio', templateParams,`${process.env.REACT_APP_USER_ID}`)
				.then(res => {
					if(res.status == 200)
					{
						Swal.fire('Thank You!','I\'ll be in touch soon.','success');
						setContact({email: '', message: ''});
						setLoading(false);
					}
				}, (err) => {
					Swal.fire('Error!','Something went wrong.','error');
					console.log(`Error: ${err}`);
					setContact({email: '', message: ''});
					setLoading(false);
				})

		}
	}

	const { email, message } = contact;

	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
			<div className="w-100">
				<div className="row">
					<div className="col-md-8">
						<h2 className="mb-5 wow slideInLeft text-secondary">Contact</h2>
						<form onSubmit={handleOnSubmit}>
							{
								loading 
								?	
								<div class="text-center">
									<div class="spinner-border spinner-border-lg text-primary my-5" role="status" Style="width: 5rem; height: 5rem;">
										<span class="sr-only">Loading...</span>
									</div>
								</div>
								:
								<Fragment>
									<div className="form-group wow fadeInUp">
										<label className="f-21"><i className="fa fa-envelope"></i> Email</label>
										<input type="email" onChange={handleOnChange} value={email} name="email" className="form-control form-control-lg input-c"/>
									</div>

									<div className="form-group wow fadeInUp pt-2">
										<label className="f-21"><i className="fa fa-comment-dots"></i> Message</label>
										<textarea onChange={handleOnChange} value={message} name="message" className="form-control form-control-lg input-c" rows="4"></textarea>
									</div>

									<a>
										<button type="submit" className="btn btn--border text-white downloadcv my-4 wow fadeInUp" data-wow-delay="1s">
											<span> <i className="ti-download"></i>Send Message</span>
										</button>
									</a>
								</Fragment>
							}
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact;
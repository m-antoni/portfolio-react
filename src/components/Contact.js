import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { ToastSuccess, ToastDanger } from './Utils/_toast';

function Contact () {

	const [contact, setContact] = useState({});
	
	const handleOnChange = e => setContact({...contact, [e.target.name]: e.target.value});

	const handleOnSubmit = e => {
		
		e.preventDefault();

		const USER_ID = `${process.env.REACT_APP_USER_ID}`;

		if(contact.email == null || contact.message == null)
		{
			ToastDanger('Email and Mesage is required');
		}
		else
		{
			let templateParams = {
				from_name: email,
				to_name: 'michaelantoni.cs@gmail.com',
				subject: 'Portfolio',
				message: message,
			}
			
			emailjs.send('gmail','PORTFOLIO_CONTACT_TEMPLATE', templateParams, USER_ID );
			setContact({email: "", message: ""});
			ToastSuccess('Thank you! Please wait for my response.');
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
							<div className="form-group wow fadeInUp">
								<label><i className="fa fa-envelope"></i> Email</label>
								<input type="email" onChange={handleOnChange} value={email} name="email" className="form-control form-control-lg"/>
							</div>

							<div className="form-group wow fadeInUp pt-2">
								<label><i className="fa fa-comment-dots"></i> Message</label>
								<textarea onChange={handleOnChange} value={message} name="message" className="form-control form-control-lg" rows="4"></textarea>
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
	)
}

export default Contact;
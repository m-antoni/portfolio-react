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

		const USER_ID = `${process.env.REACT_APP_USER_ID}`;

		if(contact.email == '' || contact.message == '')
		{
			ToastDanger('Email and message is required');
		}
		else
		{
			let templateParams = {
				from_name: email,
				to_name: 'michaelantoni.cs@gmail.com',
				subject: 'Portfolio',
				message: message,
			}
			setLoading(true);
			emailjs.send('gmail','PORTFOLIO_CONTACT_TEMPLATE', templateParams, USER_ID )
				.then(res => {
					if(res.status == 200)
					{
						Swal.fire('Success!','Message has been sent, <br/> Please wait for my response.','success');
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
import React, { Fragment, useState, useEffect } from 'react';
import * as emailjs from 'emailjs-com';
import { ToastSuccess, ToastDanger } from './Utils/_toast';
import Swal from 'sweetalert2';
import axios from 'axios';

function Contact () {

	const [contact, setContact] = useState({email: '', message: ''});
	const [loading, setLoading] = useState(false);
	const [log, setLog] = useState({});

	useEffect(() => {
		getUserLog();	
	},[])

	const handleOnChange = e => setContact({...contact, [e.target.name]: e.target.value});

	const getUserLog = async () => {
		try{
			const res = await axios.get(`https://timezoneapi.io/api/ip/?token=${process.env.REACT_APP_TIMEZONE_API_KEY}`);

			const astroLog = {
				country: `${res.data.data.country}, ${res.data.data.country_code}, ${res.data.data.timezone.capital}`,
				timezone: res.data.data.timezone.id,
				ip: res.data.data.ip,
				date: res.data.data.datetime.date_time_txt,
				user_agent: navigator.userAgent,
			};

			setLog(astroLog);

		}catch(err){
			console.log(err)
		}
	}

	
	const handleOnSubmit = async (e) => {
		e.preventDefault();

		if(email == '' || message == '') return ToastDanger('Email and Message is required');

		try{
			setLoading(true);
			await getUserLog();

			let templateParams = {
				email,
				message,
				log
			}

			await emailjs.send('gmail','portfolio', templateParams,`${process.env.REACT_APP_USER_ID}`);

			Swal.fire('Thank You!','I\'ll be in touch soon.','success');
			setContact({email: '', message: ''});
			setLoading(false);

		}catch(err)	{
			Swal.fire('Error!','Something went wrong.','error');
			console.log(`Error: ${err}`);
			setContact({email: '', message: ''});
			setLoading(false);
		}
	}

	const { email, message } = contact;

	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center mb-2" id="contact">
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
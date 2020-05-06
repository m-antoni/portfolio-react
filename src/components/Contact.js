import React, { Component, Fragment } from 'react';
import * as emailjs from 'emailjs-com';
import dotenv from 'dotenv';
import { ToastSuccess, ToastDanger } from './Utils/_toast';

class Contact extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			contact: {
				email: "",
				message: ""
			}
		}
	}
	
	handleOnChange = e =>{
	   let contact = this.state.contact;
	   contact[e.target.name] = e.target.value;

	   this.setState({ contact: { ...contact } });
	}

	handleOnSubmit = e => {
		e.preventDefault();

		const { email, message } = this.state.contact;

		const USER_ID = "user_CzXVzqgPEB5IMFBm4Uc6Y";

		if(email == '' || message == '')
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

			this.setState({ contact: { email: "", message: ""} });

			ToastSuccess('Thank you! Please wait for my response.');
		}
	}

	render() {

		const { email, message } = this.state.contact;

		return (
			<Fragment>
			    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
			        <div className="w-100">
						<div className="row">
							<div className="col-md-8">
				            	<h2 className="mb-5 wow slideInLeft text-secondary">Contact</h2>
				                <form onSubmit={this.handleOnSubmit}>
				                    <div className="form-group wow fadeInUp">
				                        <label><i className="fa fa-envelope"></i> Email</label>
				                        <input type="email" onChange={this.handleOnChange} value={email} name="email" className="form-control form-control-lg"/>
				                    </div>

				                    <div className="form-group wow fadeInUp pt-2">
				                        <label><i className="fa fa-comment-dots"></i> Message</label>
				                        <textarea onChange={this.handleOnChange} value={message} name="message" className="form-control form-control-lg" rows="4"></textarea>
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

			    <div></div>
			</Fragment>
		)
	}
}

export default Contact;
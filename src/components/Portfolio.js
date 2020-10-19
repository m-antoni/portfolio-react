import React, { useState, Fragment } from 'react';
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import '@fancyapps/fancybox/dist/jquery.fancybox';

function Portfolio () {

	const [show, setShow] = useState(false);

	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="portfolio">
			<div className="w-100">
				<h2 className="mb-5 text-secondary">Portfolio</h2>
				<div class="row">
					<div class="col-md-6 col-12 mb-4">
						<div class="mb-2"><i class="fa fa-code"></i> Weather App 
							<a className="text-primary" href="https://michael-weatherapp.netlify.app/" target="_blank"> &nbsp;Visit Here </a> |
							<a className="text-primary" href="https://github.com/m-antoni/weather-app" target="_blank">&nbsp;Source Code</a>
						</div>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/00.png">
							<img src="assets/img/portfolio/weatherapp/00.png" class="img-fluid hoverEffect wow zoomIn"/>
						</a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/01.png"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/02.png"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/03.png"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/04.png"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/05.png"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/06.png"></a>
					</div>


					<div class="col-md-6 col-12 mb-4">
						<div class="mb-2"><i class="fa fa-code"></i> Attendance Monitoring System using QR Code | 
							<a className="text-primary" href="https://github.com/m-antoni/login" target="_blank">&nbsp;Source Code</a>
						</div>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/1.jpg">
							<img src="assets/img/portfolio/loginqrcode/1.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/2.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/3.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/4.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/5.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/6.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/7.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/8.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/9.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/10.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/11.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/12.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/13.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/14.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/15.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/16.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div class="mb-2"><i class="fa fa-code"></i> Reservation System with QR Code Integration |
							<a className="text-primary" href="https://github.com/m-antoni/reservation_qrcode" target="_blank">&nbsp;Source Code</a>
						</div>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/1.jpg">
							<img src="assets/img/portfolio/balagbag/1.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>

						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/2.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/3.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/4.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/5.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/6.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/7.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/8.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/9.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/10.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/11.jpg"></a>
						<a data-fancybox="reservation" href="assets/img/portfolio/balagbag/12.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div class="mb-2"><i class="fa fa-code"></i> Hyperion (E-commerce) | 
							<a className="text-primary" href="https://github.com/m-antoni/hyperion" target="_blank">&nbsp;Source Code</a>
						</div>
						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/1.jpg">
							<img src="assets/img/portfolio/hyperion/1.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>

						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/2.jpg"></a>
						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/3.jpg"></a>
						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/4.jpg"></a>
						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/5.jpg"></a>
						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/6.jpg"></a>
						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/7.jpg"></a>
						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/8.jpg"></a>
						<a data-fancybox="hyperion" href="assets/img/portfolio/hyperion/9.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div class="mb-2"><i class="fa fa-code"></i> Laptop Xpert (website)</div>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/1.jpg">
							<img src="assets/img/portfolio/laptopxpert/1.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>

						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/2.jpg"></a>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/3.jpg"></a>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/4.jpg"></a>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/5.jpg"></a>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/6.jpg"></a>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/7.jpg"></a>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/8.jpg"></a>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/9.jpg"></a>
						<a data-fancybox="laptopxpert" href="assets/img/portfolio/laptopxpert/10.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div class="mb-2"><i class="fa fa-code"></i> YAMAHA (unofficial website)</div>
						<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/1.jpg">
							<img src="assets/img/portfolio/yamaha/1.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>

						<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/2.jpg"></a>
						<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/3.jpg"></a>
						<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/4.jpg"></a>
						<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/5.jpg"></a>
					</div>

					{
						show ? 
						<Fragment>
							<div class="col-md-6 col-12 mb-4">
								<div class="mb-2"><i class="fa fa-code"></i> Interactive Learning System </div>
								<a data-fancybox="ils" href="assets/img/portfolio/ils/1.jpg">
									<img src="assets/img/portfolio/ils/1.jpg" class="img-fluid hoverEffect wow zoomIn"/>
								</a>

								<a data-fancybox="ils" href="assets/img/portfolio/ils/2.jpg"></a>
								<a data-fancybox="ils" href="assets/img/portfolio/ils/3.jpg"></a>
								<a data-fancybox="ils" href="assets/img/portfolio/ils/4.jpg"></a>
								<a data-fancybox="ils" href="assets/img/portfolio/ils/5.jpg"></a>
								<a data-fancybox="ils" href="assets/img/portfolio/ils/6.jpg"></a>
								<a data-fancybox="ils" href="assets/img/portfolio/ils/7.jpg"></a>
								<a data-fancybox="ils" href="assets/img/portfolio/ils/8.jpg"></a>
							</div>

							<div class="col-md-6 col-12 mb-4">
								<div class="mb-2"><i class="fa fa-code"></i> Basic Cashier System</div>
								<a data-fancybox="enroll" href="assets/img/portfolio/enroll/1.jpg">
									<img src="assets/img/portfolio/enroll/1.jpg" class="img-fluid hoverEffect wow zoomIn"/>
								</a>

								<a data-fancybox="enroll" href="assets/img/portfolio/enroll/2.jpg"></a>
								<a data-fancybox="enroll" href="assets/img/portfolio/enroll/3.jpg"></a>
								<a data-fancybox="enroll" href="assets/img/portfolio/enroll/4.jpg"></a>
							</div>
						</Fragment>
						: null
					}

					<div className="col-12"></div>
					{
						!show ?
							<a className="mx-auto">
								<button onClick={() => setShow(!show)} className="btn btn--border text-white downloadcv my-4 wow fadeInUp" data-wow-delay="1s">
									<span> <i className="fa fa-angle-double-down"></i> &nbsp; SHOW MORE OF PORTFOLIO &nbsp; <i className="fa fa-angle-double-down"></i> </span>
								</button>
							</a> 
						:
						<a className="mx-auto">
							<button onClick={() => setShow(!show)} className="btn btn--border text-white downloadcv my-4 wow fadeInUp" data-wow-delay="1s">
								<span> <i className="fa fa-angle-double-up"></i> &nbsp; SHOW LESS OF PORTFOLIO &nbsp; <i className="fa fa-angle-double-up"></i> </span>
							</button>
						</a>
					}
				</div>
			</div>
		</section>
	)
}

export default Portfolio;
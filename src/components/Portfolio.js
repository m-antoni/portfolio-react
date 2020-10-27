import React, { useState, Fragment } from 'react';
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import '@fancyapps/fancybox/dist/jquery.fancybox';

function Portfolio () {

	const [show, setShow] = useState(false);

	return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="portfolio">
			<div className="w-100">
				<h2 className="mb-5 wow slideInLeft text-secondary">Portfolio</h2>
				<div class="row">
					<div class="col-md-6 col-12 mb-4">
						<div> <strong>Quiz App </strong>
							<small>	
								<a className="text-primary" href="https://michael-quiz-app.netlify.app/" target="_blank"> &nbsp;Visit Here </a> |
								<a className="text-primary" href="https://github.com/m-antoni/quiz-app" target="_blank">&nbsp;Source Code</a>
							</small>
						</div>
						<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
							<span className="text-white"> React, Redux, Firebase, Netlify</span>
						</div>
						<a data-fancybox="quizapp" href="assets/img/portfolio/quizapp/00.jpg">
							<img src="assets/img/portfolio/quizapp/00.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>
						<a data-fancybox="quizapp" href="assets/img/portfolio/quizapp/01.jpg"></a>
						<a data-fancybox="quizapp" href="assets/img/portfolio/quizapp/02.jpg"></a>
						<a data-fancybox="quizapp" href="assets/img/portfolio/quizapp/03.jpg"></a>
						<a data-fancybox="quizapp" href="assets/img/portfolio/quizapp/04.jpg"></a>
						<a data-fancybox="quizapp" href="assets/img/portfolio/quizapp/05.jpg"></a>
						<a data-fancybox="quizapp" href="assets/img/portfolio/quizapp/06.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div> <strong>Weather App </strong>
							<small>
								<a className="text-primary" href="https://michael-weatherapp.netlify.app/" target="_blank"> &nbsp;Visit Here </a> |
								<a className="text-primary" href="https://github.com/m-antoni/weather-app" target="_blank">&nbsp;Source Code</a>
							</small>
						</div>
						<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
							<span className="text-white"> React Hooks, Context API, Netlify</span>
						</div>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/00.jpg">
							<img src="assets/img/portfolio/weatherapp/00.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/01.jpg"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/02.jpg"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/03.jpg"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/04.jpg"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/05.jpg"></a>
						<a data-fancybox="weatherapp" href="assets/img/portfolio/weatherapp/06.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div> <strong>Attendance Monitoring System</strong> | 
							<small><a className="text-primary" href="https://github.com/m-antoni/login" target="_blank">&nbsp;Source Code</a></small>
						</div>
						<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
							<span className="text-white"> Laravel, Vue, MySQL</span>
						</div>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/00.jpg">
							<img src="assets/img/portfolio/loginqrcode/00.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/01.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/02.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/03.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/04.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/05.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/06.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/07.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/08.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/09.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/10.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/11.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/12.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/13.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/14.jpg"></a>
						<a data-fancybox="login" href="assets/img/portfolio/loginqrcode/15.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div> <strong>Reservation System with QR Code Integration</strong> |
							<small><a className="text-primary" href="https://github.com/m-antoni/reservation_qrcode" target="_blank">&nbsp;Source Code</a></small>
						</div>
						<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
							<span className="text-white"> Laravel, Vue, MySQL</span>
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
						<div> <strong>E-Commerce (Hyperion)</strong> | 
							<small><a className="text-primary" href="https://github.com/m-antoni/hyperion" target="_blank">&nbsp;Source Code</a></small>
						</div>
						<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
							<span className="text-white"> PHP, MySQL</span>
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
						<div> <strong>YAMAHA (Unofficial)</strong></div>
						<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
							<span className="text-white"> HTML, CSS, Bootstrap, jquery</span>
						</div>
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
								<div> <strong>Laptop Xpert</strong> |
								<small><a className="text-primary" href="https://github.com/m-antoni/laptop" target="_blank">&nbsp;Source Code</a></small>
								</div>
								<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
									<span className="text-white"> HTML, CSS, Bootstrap, jquery</span>
								</div>
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
								<div> <strong>Interactive Learning System</strong> |
									<small><a className="text-primary" href="https://github.com/m-antoni/learning_system" target="_blank">&nbsp; Source Code</a></small>
								</div>
								<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
									<span className="text-white"> Visual Fox Pro</span>
								</div>
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
								<div> <strong>Enrollment System</strong> |
									<small><a className="text-primary" href="https://github.com/m-antoni/stark" target="_blank">&nbsp; Source Code</a></small>
								</div>
								<div class="mb-2"><i class="fa fa-cog fa-spin"></i> Technologies:
									<span className="text-white"> Visual Fox Pro</span>
								</div>
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
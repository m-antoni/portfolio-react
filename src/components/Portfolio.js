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
						<div className="port-container"> 
							<div className="port-title port-text mr-3">
								<span className="port-title">E-Commerce:</span>
							</div>
							<div className="port-links port-text">
								<a href="https://github.com/m-antoni/e-commerce-react" target="_blank"><i className="fab fa-github-alt"></i> Frontend</a>
								<a href="https://github.com/m-antoni/e-commerce-mern-api" className="pl-2" target="_blank"><i className="fab fa-github-alt"></i> Backend</a>
							</div>
						</div>
						<div className="port-tech">Technologies: MERN Stack, Redux, JWT, TailwindCSS, Paypal api</div>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/00.jpg">
							<img src="assets/img/portfolio/eshop/00.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/01.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/02.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/03.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/04.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/05.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/06.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/07.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/08.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/09.jpg"></a>
						<a data-fancybox="eshop" href="assets/img/portfolio/eshop/10.jpg"></a>
					</div>
					<div class="col-md-6 col-12 mb-4">
						<div className="port-container"> 
							<div className="port-title port-text mr-3">
								<span className="port-title">Quote Generator:</span>
							</div>
							<div className="port-links port-text">
								<a href="https://github.com/m-antoni/quote-generator" target="_blank"><i className="fab fa-github-alt"></i> Source Code</a>
							</div>
						</div>
						<div className="port-tech">Technologies: React, TypeScript, Sass</div>
						<a data-fancybox="quote" href="assets/img/portfolio/quote/00.jpg">
							<img src="assets/img/portfolio/quote/00.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>
						<a data-fancybox="quote" href="assets/img/portfolio/quote/01.jpg"></a>
						<a data-fancybox="quote" href="assets/img/portfolio/quote/02.jpg"></a>
						<a data-fancybox="quote" href="assets/img/portfolio/quote/03.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div className="port-container"> 
							<div className="port-title port-text mr-3">
								<span className="port-title">Simple Task Manager:</span>
							</div>
							<div className="port-links port-text">
								<a href="https://github.com/m-antoni/task-manager" target="_blank"><i className="fab fa-github-alt"></i> Source Code</a>
							</div>
						</div>
						<div className="port-tech">Technologies: Node, Express, MongoDB, JWT</div>
						<a data-fancybox="tm" href="assets/img/portfolio/tm/00.jpg">
							<img src="assets/img/portfolio/tm/00.jpg" class="img-fluid hoverEffect wow zoomIn"/>
						</a>
						<a data-fancybox="tm" href="assets/img/portfolio/tm/01.jpg"></a>
						<a data-fancybox="tm" href="assets/img/portfolio/tm/02.jpg"></a>
						<a data-fancybox="tm" href="assets/img/portfolio/tm/03.jpg"></a>
						<a data-fancybox="tm" href="assets/img/portfolio/tm/04.jpg"></a>
						<a data-fancybox="tm" href="assets/img/portfolio/tm/05.jpg"></a>
					</div>

					<div class="col-md-6 col-12 mb-4">
						<div className="port-container"> 
							<div className="port-title port-text mr-3">
								<span className="port-title">Quiz App :</span>
							</div>
							<div className="port-links port-text">
								<a href="https://github.com/m-antoni/quiz-app" target="_blank"><i className="fab fa-github-alt"></i> Source Code</a>
							</div>
						</div>
						<div className="port-tech">Technologies: React, Redux, Firebase</div>
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
						<div className="port-container"> 
							<div className="port-title port-text mr-3">
								<span className="port-title">Weather App:</span>
							</div>
							<div className="port-links port-text">
								<a href="https://github.com/m-antoni/weather-app" target="_blank"><i className="fab fa-github-alt"></i> Source Code</a>
							</div>
						</div>
						<div className="port-tech">Technologies: React Hooks, Context Api</div>
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
						<div className="port-container"> 
							<div className="port-title port-text mr-3">
								<span className="port-title">Attendance Monitoring System:</span>
							</div>
							<div className="port-links port-text">
								<a href="https://github.com/m-antoni/login" target="_blank"><i className="fab fa-github-alt"></i> Source Code</a>
							</div>
						</div>
						<div className="port-tech">Technologies: Laravel, Vue, MySQL</div>

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

					{
						show ? 
						<Fragment>
							<div class="col-md-6 col-12 mb-4">
								<div className="port-container"> 
									<div className="port-title port-text mr-3">
										<span className="port-title">Reservation System with QR Code Integration:</span>
									</div>
									<div className="port-links port-text">
										<a href="https://github.com/m-antoni/reservation_qrcode" target="_blank"><i className="fab fa-github-alt"></i> Source Code</a>
									</div>
								</div>
								<div className="port-tech">Technologies: Laravel, Vue, MySQL</div>
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
								<div className="port-container"> 
									<div className="port-title port-text mr-3">
										<span className="port-title">Hyperion:</span>
									</div>
									<div className="port-links port-text">
										<a href="https://github.com/m-antoni/hyperion" target="_blank"><i className="fab fa-github-alt"></i> Source Code</a>
									</div>
								</div>
								<div className="port-tech">Technologies: JS, PHP, MySQL</div>

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
								<div className="port-container"> 
									<div className="port-title port-text mr-3">
										<span className="port-title">YAMAHA (Unofficial):</span>
									</div>
								</div>
								<div className="port-tech">Technologies: HTML, CSS, Bootstrap, jquery</div>
								<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/1.jpg">
									<img src="assets/img/portfolio/yamaha/1.jpg" class="img-fluid hoverEffect wow zoomIn"/>
								</a>
								<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/2.jpg"></a>
								<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/3.jpg"></a>
								<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/4.jpg"></a>
								<a data-fancybox="yamaha" href="assets/img/portfolio/yamaha/5.jpg"></a>
							</div>

							<div class="col-md-6 col-12 mb-4">
								<div className="port-container"> 
									<div className="port-title port-text mr-3">
										<span className="port-title">LaptopXpert:</span>
									</div>
									<div className="port-links port-text">
										<a href="https://github.com/m-antoni/laptop" target="_blank"><i className="fab fa-github-alt"></i> Source Code</a>
									</div>
								</div>
								<div className="port-tech">Technologies: HTML, CSS, Bootstrap, jquery</div>
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
								<div className="port-container"> 
									<div className="port-title port-text mr-3">
										<span className="port-title">Learning System:</span>
									</div>
								</div>
								<div className="port-tech">Technologies: Visual Fox Pro</div>
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
								<div className="port-container"> 
									<div className="port-title port-text mr-3">
										<span className="port-title">Enrollment System:</span>
									</div>
								</div>
								<div className="port-tech">Technologies: Visual Fox Pro</div>
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
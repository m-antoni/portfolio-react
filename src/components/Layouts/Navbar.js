import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import $ from 'jquery';

function Navbar () {
	
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-0" id="sideNav">
			<a className="navbar-brand js-scroll-trigger" href="#about">
			<span className="d-block d-lg-none">
				<a data-fancybox="profile_img" href="/assets/img/profile.jpg">
					<img className="img-fluid rounded-circle hoverEffect wow fadeInLeft mini-profile" data-wow-delay="2s" src="/assets/img/profile.jpg" alt="profile_img"/>
				</a>
			</span>
			<span className="d-none d-lg-block">
				<a data-fancybox="profile_img" href="/assets/img/profile.jpg">
					<img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/assets/img/profile.jpg" alt="profile_img"/>
				</a>
			</span>
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul align="center" className="navbar-nav">
					<li className="nav-item p-0">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#about">About</AnchorLink>
					</li>
					<li className="nav-item">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#experience">Experience</AnchorLink>
					</li>
					<li className="nav-item">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#education">Education</AnchorLink>
					</li>
					<li className="nav-item">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#skills">Skills</AnchorLink>
					</li>
					<li className="nav-item">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</AnchorLink>
					</li>
					<li className="nav-item">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#seminars">Seminars</AnchorLink>
					</li>
					<li className="nav-item">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#awards">Awards</AnchorLink>
					</li>
					{/* {<li className="nav-item">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#contact">Contact</AnchorLink>
					</li>} */}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import $ from 'jquery';

function Navbar () {
	
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
			<a className="navbar-brand js-scroll-trigger" href="#page-top">
			<span className="d-block d-lg-none">
				<a data-fancybox="profile_img" href="assets/img/profile.jpg">
					<img className="img-fluid rounded-circle hoverEffect wow fadeInLeft" data-wow-delay="2s" src="assets/img/profile.jpg" alt="profile_img" width="50px"/>
				</a>
			</span>
			<span className="d-none d-lg-block">
				<img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://lh3.googleusercontent.com/mRQFAlsq_DPVLBTPJRwgwDCJW_T-CtPKzh2I0mD3EkqeqwCZzkoJCSh59JXUvg7n5AP2O4Hyna59apXoCK5S9f42pS2rdXVkqUFC7bgijQP3ooEpfwACOn3jfDEeM95j5O9VRLEA=w2400" alt="profile_img"/>
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
					{<li className="nav-item">
					<AnchorLink onClick={() => $('.navbar-collapse').removeClass('show')} className="nav-link js-scroll-trigger" href="#contact">Contact</AnchorLink>
					</li>}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;
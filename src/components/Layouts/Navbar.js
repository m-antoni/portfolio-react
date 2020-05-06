import React, { Component, Fragment } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import $ from 'jquery';

class Navbar extends Component {
	
	hideTop = () => $('.navbar-collapse').removeClass('show');

	render() {
		return (
			<Fragment>
		        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
		          <a className="navbar-brand js-scroll-trigger" href="#page-top">
		            <span className="d-block d-lg-none">MICHAEL</span>
		            <span className="d-none d-lg-block">
		              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt=""/>
		            </span>
		          </a>
		          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="navbar-toggler-icon"></span>
		          </button>
		          <div className="collapse navbar-collapse" id="navbarSupportedContent">
		            <ul className="navbar-nav">
		              <li className="nav-item p-0">
		                <AnchorLink onClick={this.hideTop}className="nav-link js-scroll-trigger" href="#about">About</AnchorLink>
		              </li>
		              <li className="nav-item">
		                <AnchorLink onClick={this.hideTop}className="nav-link js-scroll-trigger" href="#experience">Experience</AnchorLink>
		              </li>
		              <li className="nav-item">
		                <AnchorLink onClick={this.hideTop}className="nav-link js-scroll-trigger" href="#education">Education</AnchorLink>
		              </li>
		              <li className="nav-item">
		                <AnchorLink onClick={this.hideTop}className="nav-link js-scroll-trigger" href="#skills">Skills</AnchorLink>
		              </li>
		              <li className="nav-item">
		                <AnchorLink onClick={this.hideTop}className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</AnchorLink>
		              </li>
		              <li className="nav-item">
		                <AnchorLink onClick={this.hideTop}className="nav-link js-scroll-trigger" href="#seminars">Seminars</AnchorLink>
		              </li>
		              <li className="nav-item">
		                <AnchorLink onClick={this.hideTop}className="nav-link js-scroll-trigger" href="#awards">Awards</AnchorLink>
		              </li>
		              {<li className="nav-item">
		                <AnchorLink onClick={this.hideTop}className="nav-link js-scroll-trigger" href="#contact">Contact</AnchorLink>
		              </li>}
		            </ul>
		          </div>
		        </nav>
			</Fragment>
		)
	}
}

export default Navbar;
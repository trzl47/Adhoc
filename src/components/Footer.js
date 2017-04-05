// Libs
import React from 'react';
// Components

const Footer = () => {
		return (
			<footer className="container-fluid">
				<div className="row" role="presentation">
					<div className="col-xs-12 social-media" role="presentation">
						<a href="#" aria-label="Link to Facebook"><i className="fa fa-lg fa-facebook" aria-hidden="false"></i></a>
						<a href="#" aria-label="Link to Twitter"><i className="fa fa-lg fa-twitter" aria-hidden="false"></i></a>
						<a href="#" aria-label="Link to Instagram"><i className="fa fa-lg fa-instagram" aria-hidden="false"></i></a>
					</div>
					<div className="col-xs-12 copyright" role="presentation">
						&copy; 2016 Adhoc All Rights Reserved
					</div>
				</div>
			</footer>
		);
	}

export default Footer;

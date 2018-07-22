// Libs
import React from 'react';
// Components
// styles
import '../../static/css/footer.css';

const Footer = () => {
	return (
		<footer className="container-fluid">
			<div className="social-media" role="presentation">
				<a href="/" aria-label="Link to Facebook"><i className="fab fa-lg fa-facebook" aria-hidden="false"></i></a>
				<a href="/" aria-label="Link to Twitter"><i className="fab fa-lg fa-twitter" aria-hidden="false"></i></a>
				<a href="/" aria-label="Link to Instagram"><i className="fab fa-lg fa-instagram" aria-hidden="false"></i></a>
			</div>
			<div className="copyright" role="presentation">
				&copy; 2016 Adhoc All Rights Reserved
			</div>
		</footer>
	);
};

export default Footer;
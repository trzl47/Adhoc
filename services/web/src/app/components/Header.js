// Libs
import React from 'react';
// Components

const Header = () => {
		return (
			<header>
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid" role="presentation">
					<a href='adhoc.tbrownkcdev.com'><img className="navbar-brand collapse navbar-collapse" src={require('../../static/img/logo.png')} alt="Adhoc logo" /></a>
					<ul className="nav navbar-nav navbar-right" role="presentation">
						<li className="active"><a href='adhoc.tbrownkcdev.com'>About us</a></li>
						<li><a href='adhoc.tbrownkcdev.com'>Our team</a></li>
						<li><a href='adhoc.tbrownkcdev.com'>Contact us</a></li>
					</ul>
				</div>
			</nav>
			</header>
		);
	};

export default Header;

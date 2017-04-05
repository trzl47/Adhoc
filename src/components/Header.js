// Libs
import React from 'react';
// Components

const Header = () => {
		return (
			<header>
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid" role="presentation">
					<a href="#"><img className="navbar-brand collapse navbar-collapse" src={require("./assets/logo.png")} alt="Adhoc logo" /></a>
					<ul className="nav navbar-nav navbar-right" role="presentation">
						<li className="active"><a href="#">About us</a></li>
						<li><a href="#">Our team</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>
				</div>
			</nav>
			</header>
		);
	}

export default Header;

// Libs
import React from 'react';
// Components
// styles
import '../../static/css/header.css';

const Header = () => {
		return (
			<header>
			<nav className="navbar">
				<a href='adhoc.tbrownkcdev.com'>
					<img src={require('../../static/img/logo.png')} alt="Adhoc logo" />
				</a>
				<ul className="nav" role="presentation">
					<li className="active">
						<a href='adhoc.tbrownkcdev.com'>About us &nbsp;</a>
					</li>
					<li>
						<a href='adhoc.tbrownkcdev.com'>Our team &nbsp;</a>
					</li>
					<li>
						<a href='adhoc.tbrownkcdev.com'>Contact us &nbsp;</a>
					</li>
				</ul>
			</nav>
			</header>
		);
	};

export default Header;

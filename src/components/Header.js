// Libs
import React from 'react';
// Components

const Header = () => {
		return (
			<header>
			<nav class="navbar navbar-default navbar-fixed-top">
				<div class="container-fluid" role="presentation">
					<img class="navbar-brand collapse navbar-collapse" src={require("./assets/logo.png")} alt="Adhoc logo" />
					<ul class="nav navbar-nav navbar-right" role="presentation">
						<li><a href="#">Home</a></li>
						<li class="active"><a href="#">About us</a></li>
						<li><a href="#">Our team</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>
				</div>
			</nav>
			</header>
		);
	}

export default Header;

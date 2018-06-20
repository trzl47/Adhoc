// Libs
import React, { Component } from 'react';
// Components
import Jumbotron from '../components/Jumbotron.js';
import QuoteBanner from '../containers/QuoteBanner';
import About from '../components/About.js';
import Team from './Team.js';
import Clients from './Clients.js';
// styles
import '../../static/css/homepage.css';

export default class Home extends Component {
	render() {
		return(
			<div className='homepage'>
				<Jumbotron />
				<QuoteBanner />
				<About />
				{/* <Team /> */}
				{/* <Clients /> */}
			</div>
		);
	}
}

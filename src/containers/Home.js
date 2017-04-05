// Libs
import React, { Component } from 'react';
// Components
import Jumbotron from '../components/Jumbotron.js';
import QuoteBanner from './QuoteBanner.js';
import About from '../components/About.js';
import Team from './Team.js';
import Clients from './Clients.js';

export default class Home extends Component {
	render() {
		return(
			<div className='adhoc'>
				<Jumbotron />
				<QuoteBanner />
				<About />
				<Team />
				<Clients />
			</div>
		);
	}
}

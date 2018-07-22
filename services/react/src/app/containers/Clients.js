// Libs
import React, { Component } from 'react';
// Components
import Client from '../components/Client';
import currentclients from '../../data/currentclients';
import HeaderLine from '../components/HeaderLine.js';
// css
import '../../static/css/clients.css';

	const clientele = currentclients.Home.map((client) => {
		return (
			<Client key={client.id}
				img={client.img}
				name={client.name} />
		);
	});

class Clients extends Component {
	render() {
		return(
			<section className="clients">
				<HeaderLine header={'Current Clients'} />
				<div className='client-images'>
					{ clientele }
				</div>
			</section>
		);
	}
}

export default Clients;

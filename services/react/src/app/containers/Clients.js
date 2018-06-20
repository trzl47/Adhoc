// Libs
import React, { Component } from 'react';
// Components
import Client from '../components/Client';
import currentclients from '../../data/currentclients';
import HeaderLine from '../components/HeaderLine.js';

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
				{ clientele }
			</section>
		);
	}
}

export default Clients;

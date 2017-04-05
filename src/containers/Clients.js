// Libs
import React, { Component } from 'react';
// Components
import Client from '../components/Client.js';
import currentclients from '../components/currentclients.js';

const renderClients = (clients, length) => {
	const clientele = clients.map((client) => {
		return (
			<div className="col-xs-12 col-sm-4 image-container"
					key={client.id}>
				<Client
					img={client.img}
					name={client.name} />
			</div>
		)
	});
	const chunkMembers = (arr, size) => {
		let rows = [];
		for (let i = 0; i < arr.length; i+=size) {
			rows.push(arr.slice(i,i+size));
		}
		return rows;
	};
	const renderRows = () => {
		return (
			chunkMembers(clientele, 3).map((row) => {
				return (
					<div className="row">
						{ row }
					</div>
				)
			})
		)
	};
	return (
		renderRows()
	);
};

class Clients extends Component {
	render() {
		const clientContent = currentclients.Home;
		return(
			<div className="container header-line clients">
				<div className="row">
					<div className="col-xs-12 header">
						<h2>Current Clients</h2>
					</div>
				</div>
				{ renderClients(clientContent, clientContent.length) }
			</div>
		);
	}
}

export default Clients;

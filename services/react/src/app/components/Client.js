// Libs
import React from 'react';
// Components

const Client = props => {
		return (
			<div className="image-container">
				<img src={props.img} alt={props.name} role="presentation" />
			</div>
		);
	};

export default Client;

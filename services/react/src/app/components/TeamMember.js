// Libs
import React from 'react';
// Components

const TeamMember = props => {
		return (
			<div className='teammember'>
				<img src={props.img} alt={props.name} role="presentation" />
				<strong className="line">{props.name}</strong>
				<span className="line">{props.title}</span>
			</div>
		);
	}

export default TeamMember;

// Libs
import React from 'react';
// Components
// style
import '../../static/css/teammember.css';

const TeamMember = props => {
		return (
			<div className='member'>
				<img src={props.img} alt={props.name} role="presentation" />
				<strong className="line">{props.name}</strong>
				<span className="line">{props.title}</span>
			</div>
		);
	}

export default TeamMember;

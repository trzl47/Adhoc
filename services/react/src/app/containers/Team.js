// Libs
import React, { Component } from 'react';
// Components
import TeamMember from '../components/TeamMember.js';
import teammembers from '../../data/teammembers.js';
// style
import '../../static/css/team.css';

const renderTeam = (members) => {
	const team = members.map((member) => {
		return (
			<TeamMember key={member.id}
				title={member.title}
				img={member.img}
				name={member.name} />
		);
	})
	return team;
};
class Team extends Component {
	render() {
		const membersContent = teammembers.Home;
		return(
			<section className='team'>
				<h2>Meet the team</h2>
				<div className="teammembers">
					{ renderTeam(membersContent) }
				</div>
			</section>
		);
	}
}

export default Team;

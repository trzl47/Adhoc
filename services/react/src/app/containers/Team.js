// Libs
import React, { Component } from 'react';
// Components
import TeamMember from '../components/Team/TeamMember.js';
import teammembers from '../components/Team/teammembers.js';

const renderTeam = (members, length) => {
	const team = members.map((member) => {
		return (
			<div className="col-xs-12 col-sm-3 member"
					key={member.id}>
				<TeamMember
					title={member.title}
					img={member.img}
					name={member.name} />
			</div>
		);
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
			chunkMembers(team, 4).map((row) => {
				let count = 0;
				return (
					<div className="row" key={count++}>
						{ row }
					</div>
				);
			})
		);
	};
	return (
		renderRows()
	);
};

class Team extends Component {
	render() {
		const membersContent = teammembers.Home;
		return(
			<div className='team'>
				<div className="container-fluid team">
					<div className="row">
						<h2 className="col-xs-12">Meet the team</h2>
					</div>
					{ renderTeam(membersContent, membersContent.length) }
				</div>
			</div>
		);
	}
}

export default Team;

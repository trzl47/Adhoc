// Libs
import React, { Component } from 'react';
// Components
import Referral from './Referral.js';
import quotes from './Referral.js';

const renderReferrals = (referrals, length) => {
	referrals.map((referral) => {
		return (
			<Referral
				quote={referral.quote}
				author={referral.author}
				client={referral.client}
				key={referral.id} />
		)
	});
};

class Jumbotron extends Component {
	render() {
		const referralContent = quotes.Home;
		return(
				<div className='quotebanner'>
					<div className='container'>
						{ renderReferrals(referralContent, referralContent.length) }
					</div>
				</div>
		);
	}
}

export default Jumbotron;

// Libs
import React, { Component } from 'react';
// Components
import Referral from '../components/QuoteBanner/Referral.js';
import quotes from '../components/QuoteBanner/quotes.js';

const renderReferrals = (referrals, length) => {
	const referralquotes = referrals.map((referral) => {
		return (
			<Referral
				quote={referral.quote}
				author={referral.author}
				client={referral.client}
				key={referral.id} />
		)
	});

	return referralquotes;
};

class QuoteBanner extends Component {
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

export default QuoteBanner;

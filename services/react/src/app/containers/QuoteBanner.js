// Libs
import React, { Component } from 'react';
// Components
import Referral from '../components/Referral.js';
import quotes from '../../data/quotes.js';
// styles
import '../../static/css/quotebanner.css';

const renderReferrals = (referrals) => {
	const referralquotes = referrals.map((referral) => {
		return (
			<Referral
				quote={referral.quote}
				author={referral.author}
				client={referral.client}
				key={referral.id} />
		);
	});

	return referralquotes;
};

class QuoteBanner extends Component {
	render() {
		const referralContent = quotes.Home;
		return(
			<div className='quotebanner'>
				{ renderReferrals(referralContent) }
			</div>
		);
	}
}

export default QuoteBanner;

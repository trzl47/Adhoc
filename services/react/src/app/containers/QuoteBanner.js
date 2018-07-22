// Libs
import React, { Component } from 'react';
// Components
import Referral from '../components/Referral.js';
import quotes from '../../data/quotes.js';
// styles
import '../../static/css/quotebanner.css';

	const referralquotes = quotes.Home.map((referral) => {
		return (
			<Referral
				quote={referral.quote}
				author={referral.author}
				client={referral.client}
				key={referral.id} />
		);
	});

class QuoteBanner extends Component {
	render() {
		return(
			<div className='quotebanner'>
				{ referralquotes }
			</div>
		);
	}
}

export default QuoteBanner;

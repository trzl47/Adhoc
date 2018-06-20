// Libs
import React from 'react';
// Components
// styles
import '../../static/css/referral.css';

const Referral = props => {
		return (
			<div className='referral'>
				<div className="quote" role="presentation">
					{props.quote}
				</div>
				<div className="citation" role="presentation">
					<em><strong aria-label="Quote by">{props.author}</strong> , {props.client}</em>
				</div>
			</div>
		);
	};

export default Referral;

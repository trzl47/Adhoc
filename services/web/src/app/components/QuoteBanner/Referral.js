// Libs
import React from 'react';
// Components

const Referral = props => {
		return (
			<div className='referral'>
				<div className="container quote" role="presentation">
					<div className="row" role="presentation">
						<div className="col-xs-12" role="note" aria-label="Quote">
							{props.quote}
						</div>
					</div>
					<div className="row" role="presentation">
						<div className="col-xs-12 citation" role="presentation">
							<strong aria-label="Quote by">{props.author}</strong> , {props.client}
						</div>
					</div>
				</div>
			</div>
		);
	}

export default Referral;

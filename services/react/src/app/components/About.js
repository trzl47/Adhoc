// Libs
import React, { Component } from 'react';
// Components

export default class About extends Component {
	render() {
		return(
				<div className='about'>
					<div className="container header-line" role="presentation">
						<div className="row" role="presentation">
							<div className="col-xs-12 header" role="presentation">
								<h2>Why Adhoc?</h2>
							</div>
						</div>
						<div className="row" role="presentation">
							<div className="col-xs-12 col-sm-4 image-container" role="presentation">
								<img src={require('../../static/img/experienced.png')} alt="We are experienced" />
							</div>
							<div className="col-xs-12 col-sm-4 image-container" role="presentation">
								<img src={require('../../static/img/fun.png')} alt="We are fun" />
							</div>
							<div className="col-xs-12 col-sm-4 image-container" role="presentation">
								<img src={require('../../static/img/smart.png')} alt="We are smart" />
							</div>
						</div>
					</div>
				</div>
		);
	}
}

// Libs
import React, { Component } from 'react';
// Components
import HeaderLine from './HeaderLine.js';
// css
import '../../static/css/about.css';

const About = () => {
	return (
		<section className='about'>
			<HeaderLine header={'Why Adhoc?'} />
			<div className='why-images'>
				<div className="image-container" role="presentation">
					<img src={require('../../static/img/experienced.png')} alt="We are experienced" />
				</div>
				<div className="image-container" role="presentation">
					<img src={require('../../static/img/fun.png')} alt="We are fun" />
				</div>
				<div className="image-container" role="presentation">
					<img src={require('../../static/img/smart.png')} alt="We are smart" />
				</div>
			</div>
		</section>
	);
};

export default About;
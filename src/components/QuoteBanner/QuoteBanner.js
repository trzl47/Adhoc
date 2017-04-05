// Libs
import React, { Component } from 'react';
// Components
import Header from '../components/Header.js';
import Main from '../components/Main.js';

export default class Jumbotron extends Component {
	render() {
		return(
				<div className='jumbotron'>
					<div className='container'>
						<Header />
						<Main />
					</div>
				</div>
		);
	}
}

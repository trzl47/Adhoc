// Libs
import React, { Component } from 'react';
// Components
// styles
import '../../static/css/headerline.css';

export default class HeaderLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return(
			<div className="header-line">
				<h2>{ this.props.header }</h2>
			</div>
		);
	}
}
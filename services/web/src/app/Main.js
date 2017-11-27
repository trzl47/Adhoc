//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './containers/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import NotFound from '../app/NotFound';

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact={true} pattern="/" component={Home} />
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;

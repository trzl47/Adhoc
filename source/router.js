// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './containers/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router>
		<div>
			<Header />
			<Switch>
				<Route exact={true} pattern="/" component={Home} />
				<Route path="*" component={NotFound} />
			</Switch>
			<Footer />
		</div>
  </Router>
);

export default routes;

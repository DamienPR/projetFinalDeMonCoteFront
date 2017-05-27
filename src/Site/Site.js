import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Items from './Items/Items.js';
import Head from './Head/Head.js';
import Nav from './Nav/Nav.js';
import About from './About/About.js';
import Help from './Help/Help.js';
import User from './User/User.js';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

//import axios from 'axios';

const history = createBrowserHistory();

//Importer les différents components qu'on a crée

// Déclarer la classe de notre site

// ***********************************************************************
// **en commentaire, la façon de donner les props à l'enfant 'About'******
// ***********************************************************************


class Site extends Component {
	
	constructor (props){
		super(props)

		// this.state = {
		// 	promo: [],
		// 	caracteristiques: {id: '', name: '', startDate: '', endDate: ''}
		// }
	}
	
	// componentWillMount() {
		
	// 	const self=this;
	// 	axios.get('http://localhost:8080/api/promo')
	// 	.then (function (response) {			
	// 		console.log('///------------///');
	// 		self.setState({
	// 			promo : response.data
	// 		})
	// 		console.log(response.data);
	// 		console.log('///------------///');
	// 	})
	// 	.catch(function (err) {
	// 		console.log('///------------///');
	// 		console.log(err);
	// 		console.log('///------------///');
	// 	});
	// }

	// rendLesPromos = () => {
	// 	return <About promos={this.state.promo}/>
	// }

	render () {
		return (
			<Router history={history}>
				<div>
					<Route path="/" component={Head} />;
					<Route path="/" component={Nav} />;
					{/*<Route path="/" render={this.rendLesPromos} />;*/}
					<Route path="/" component={About} />;
					<Route path="/gallery" component={Items} />;
					<Route path="/help" component={Help} />;
					<Route path="/user" component={User} />;
				</div>
			</Router>
		)
	}
}

export default Site;
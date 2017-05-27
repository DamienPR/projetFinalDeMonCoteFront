import React, {Component} from 'react';
import {Container, Form, Dropdown, Divider} from 'semantic-ui-react';
// npm install semantic-ui-dropdown car version dropdown utilisée n'est par react
import AboutForm from './Form/AboutForm.js';
import axios from 'axios';

class About extends Component {	

	constructor(props) {
		super(props)

		this.state = {
			user: [],
			selectedUserName: '',
			selectedUserEmail: '',
			selectedUserRole: '',
			promo: [],
			selectedPromoName: '',
			selectedPromoStartDate: '',
			selectedPromoEndDate: ''
		}
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePromo = this.handleChangePromo.bind(this);
	}
		
		handleChangeUser(event) {
// le ", () => {}" permet de faire la première partie de la méthode dans un premier temps, et ensuite
// de faire le reste de la méthode
		if("0" !== event.target.value){
		this.setState({selectedUserName: event.target.value}, () => {
// Le "&&" est une condition. Si la condition avant le "&&" est vraie, alors, la suite de la méthode s'éxecute
			this.state.user.map(
							user => (
								this.state.selectedUserName === user.lastname &&
									this.setState({
										selectedUserEmail: user.email,
										selectedUserRole: user.role.name
									})								
							)
						)
		});
		}
	}

	handleChangePromo(event) {
// le ", () => {}" permet de faire la première partie de la méthode dans un premier temps, et ensuite
// de faire le reste de la méthode

		if("0" !== event.target.value){
		this.setState({selectedPromoName: event.target.value}, () => {
// Le "&&" est une condition. Si la condition avant le "&&" est vraie, alors, la suite de la méthode s'éxecute
//Le "map" permet de parcourir les promos du state
			this.state.promo.map(
							promo => (
								this.state.selectedPromoName === promo.name &&
									this.setState({
										selectedPromoStartDate: promo.startDate,
										selectedPromoEndDate: promo.endDate
									})								
							)
						)
		});
		}
	}
	
	componentWillMount () {
		const self=this;

		axios.get('http://localhost:8080/api/user')
		.then (function (response) {			
			self.setState({
				user : response.data
			})
		})
		.catch(function (err) {
			console.log('///------------///');
			console.log(err);
			console.log('///------------///');
		});

		axios.get('http://localhost:8080/api/promo')
		.then (function (response) {			
			self.setState({
				promo : response.data
			})
		})
		.catch(function (err) {
			console.log('///------------///');
			console.log(err);
			console.log('///------------///');
		});
	}

	render () {
		return (
			<Container>
				<div>
					<Form>
						<Form.Field>
							<select className="ui dropdown" onChange={this.handleChangePromo}>
								<option value="0">Veuillez choisir la promo</option>
								{this.state.promo.map(
									promo => (
										<option value={promo.name}>{promo.name}</option>
									)
								)}
							</select>
						</Form.Field>
						<Form.Field>
							<select className="ui dropdown" onChange={this.handleChangeUser}>
								<option value="0">Veuillez choisir l'utilisateur</option>
								{this.state.user.map(
									user => (
										<option value={user.lastname}>{user.lastname}</option>
									)
								)}
							</select>
						</Form.Field>
					</Form>				
				</div>
				<Divider />
				<AboutForm 
					users={this.state.user} 
					promos={this.state.promo} 
					selectedUserName={this.state.selectedUserName} 
					selectedUserEmail={this.state.selectedUserEmail} 
					selectedUserRole={this.state.selectedUserRole}
					selectedPromoName={this.state.selectedPromoName}
					selectedPromoStartDate={this.state.selectedPromoStartDate}
					selectedPromoEndDate={this.state.selectedPromoEndDate}/>
			</Container>
		)
	}
}

export default About;
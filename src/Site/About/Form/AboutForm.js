import React, { Component } from 'react';
import {Container, Form, Button} from 'semantic-ui-react';
//import axios from 'axios';

class AboutForm extends Component {
    constructor(props) {
		super(props)

		// this.state = {
		// displayFormUser : '{{display: none}}',
		// displayFormPromo : '{{display: none}}'
		// }
	}

	displayForm () {
	//	const self=this;
		if ('' !== this.props.selectedUserName) {
			// this.setState({
			// 	displayFormPromo: 'none',
			// 	displayFormUser: 'block'
			// })
			// self.setState({
			// 	displayFormUser : '{{display: block}}',
			// 	displayFormPromo: '{{display: none}}'
			// })
			return <Form 
			//style={this.state.displayFormUser}
			>
						<Form.Field>
							<label>Nom</label>
							<input type="text" placeholder={this.props.selectedUserName}/>
						</Form.Field>
						<Form.Field>
							<label>Email</label>
							<input className="ui input" type="text" placeholder={this.props.selectedUserEmail} />
						</Form.Field>
						<Form.Field>
							<label>Role</label>
							<input className="ui input" type="text" placeholder={this.props.selectedUserRole}/>
						</Form.Field>
						<Button content='Valider les modifications' />
					</Form>}

		else if ('' !== this.props.selectedPromoName){
			// self.setState({
			// 	displayFormUser : '{{display: none}}',
			// 	displayFormPromo: '{{display: block}}'
			// })
			return <Form
			//style={this.state.displayFormPromo}
			>
					<Form.Field>
						<label>Nom de la Promo</label>
						<input className="ui input" type="text" placeholder={this.props.selectedPromoName} />
					</Form.Field>
					<Form.Field>
						<label>Date de début</label>
						<input className="ui input" type="text" placeholder={this.props.selectedPromoStartDate} />
					</Form.Field>
					<Form.Field>
						<label>Date de fin</label>
						<input className="ui input" type="text" placeholder={this.props.selectedPromoEndDate} />
					</Form.Field>
					<Button content='Valider les modifications' />
				</Form>
		}
	}	
	// componentWillMount () {
	// 	//faire le update
	// }

	render () {
		return (
			<Container>
				<div>
					{this.displayForm()}
				</div>				
			</Container>
		)
	}
}

export default AboutForm;
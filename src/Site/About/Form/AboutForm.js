import React, { Component } from 'react';
import {Container, Form, Button} from 'semantic-ui-react';
//import axios from 'axios';

class AboutForm extends Component {
    constructor(props) {
		super(props)

		// this.state = {
		// displayFormUser: "visible",
		// displayFormPromo: "visible"
		// }
	}

	displayForm () {
		if ('' !== this.props.selectedUserName) {
			// this.setState({
			// 	displayFormPromo: 'none',
			// 	displayFormUser: 'block'
			// })	
			return <Form style= 'visibility: visible'>
						<Form.Field>
							<label>Nom</label>
							<input type="text" placeholder={this.props.selectedUserName}/>
						</Form.Field>
						<Form.Field>
							<label>Email</label>
							<input class="ui input" type="text" placeholder={this.props.selectedUserEmail} />
						</Form.Field>
						<Form.Field>
							<label>Role</label>
							<input class="ui input" type="text" placeholder={this.props.selectedUserRole}/>
						</Form.Field>
						<Button content='Valider les modifications' />
					</Form>}

		else if ('' !== this.props.selectedPromoName){
			return <Form style='visibility: visible'>
					<Form.Field>
						<label>Nom de la Promo</label>
						<input class="ui input" type="text" placeholder={this.props.selectedPromoName} />
					</Form.Field>
					<Form.Field>
						<label>Date de début</label>
						<input class="ui input" type="text" placeholder={this.props.selectedPromoStartDate} />
					</Form.Field>
					<Form.Field>
						<label>Date de fin</label>
						<input class="ui input" type="text" placeholder={this.props.selectedPromoEndDate} />
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
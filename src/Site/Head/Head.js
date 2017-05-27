import React, {Component} from 'react';
import {Image, Segment, Header, Divider} from 'semantic-ui-react';
import simplon from './polygone-simplon.png';

class Head extends Component {
	render () {
		return (
			<div>
				{<Image src={simplon} />}
				<Segment>
					<Header as="h2" color="grey">LA POSTE - SIMPLON</Header>
				</Segment>
				<Divider section />
			</div>
		)
	}
}

export default Head;
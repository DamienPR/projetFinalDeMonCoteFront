import React, { Component } from 'react';

class Product extends Component {
	
//	transferAdd = () => {
//		this.props.add(this.props.price);
//	}
	
	transferName = () => {
		this.props.console(this.props.name);
	}
	
	
	render() {
		return (
			<div className="product">
			{this.props.name} <br/>
			{this.props.price} <br/>
			<button type="button" onClick={this.transferName} >ajouter au panier</button>
			</div>
		)
	}
}

export default Product;
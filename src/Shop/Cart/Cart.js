import React, { Component } from 'react';

class Cart extends Component {
	render() {
		return(
			<div className="cart">
			Cart
			<div>Total : {this.props.click}</div>
			</div>
		)
	}

}

export default Cart;
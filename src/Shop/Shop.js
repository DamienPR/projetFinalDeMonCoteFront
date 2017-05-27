import React, { Component } from 'react';
import Cart from './Cart/Cart.js';
import Product from './Product/Product.js';
import products from './Product/products.json';
import './shop.css';

class Shop extends Component {
	
	constructor (props) {
		super(props);
		this.state = {
			cart: [],
			click: 0
		};
	}
	
	componentWillMount () {
		console.log(products.datas);
		this.setState({
			products: products.datas
		});
	}
	
	incrementClick = () => {
		let newClick = this.state.click;
		newClick ++;
		this.setState ({
			click: newClick
		});
		console.log(this.state.click);
	}
	
//	addToCart = (productName, productPrice) => {
//		let newCart = this.state.cart;
//		
//		newCart.push({name: productName, price: productPrice});
//		this.setState({cart: newCart});
//	}
	
	addToCart = (productPrice) => {
		let newCart = this.state.cart;
		newCart.push(productPrice);
		this.setState({cart: newCart});
	}
	

	consoleProductName = (productName) => {
		console.log(productName);
	}
	
	componentDidUpdate () {
		console.log(this.state.cart);
	}
	
	render () {
		return (
			<div className="shop">
				<Cart click={this.state.click}/>
				{
					this.state.products.map(
						(product, i) => <Product key={i} price={product.price} name={product.name} 
						add={this.addToCart} increment={this.incrementClick} console={this.consoleProductName}/>)
				}
			</div>
		)
	}
}

export default Shop;
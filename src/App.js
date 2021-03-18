import React from 'react';
import { useState } from 'react';
import Card from './Card';

function App() {
	let items = [
		{
			id : "Item One",
			price : '24.99',
			description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
		},
		{
			id : "Item Two",
			price : '24.99',
			description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
		},
		{
			id : "Item Three",
			price : '24.99',
			description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
		},
		{
			id : "Item Four",
			price : '24.99',
			description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
		},
		{
			id : "Item Five",
			price : '24.99',
			description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
		},		{
			id : "Item Six",
			price : '24.99',
			description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
		}

	]

	const [totalItems, setTotalItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const handleAddToCart = (item) => {
		setTotalItems([...totalItems,item]);
		let tempTotal = parseFloat(totalPrice) + parseFloat(item.price);
		setTotalPrice(tempTotal.toFixed(2));
	}

	const handleRemoveItem = (item, index) => {
		totalItems.splice(index, 1);
		setTotalPrice([...totalItems]);
		let tempTotal = totalPrice - item.price;
		setTotalPrice(tempTotal.toFixed(2))
	}

	return(
		<div className="container">
			<div className="row">
				<div className="col-lg-12 text-center">
					<h3>Items in Cart - Total Price ${totalPrice}</h3>
					<ul className='list-group'>
					{
						totalItems.map((item, index) => {
							return <li 
										className='list-group-item d-flex justify-content-around'
										key={index}>
										{item.id}
										<span>${item.price}</span>
										<button className="btn btn-primary" onClick={() => handleRemoveItem(item, index)}>Remove Item</button>
									</li>
						})
					}
					</ul>
				</div>
			</div>
			<div className="row">
			{
				items.map((item, index) => {
					return <Card data={item} click = {handleAddToCart} key={index}></Card>
				})
			}
			</div>
		</div>
	);
}

export default App;

import React from "react";

function AddedProducts({ item }) {
	return (
		<div className="card-wrapper">
			<img src={item.imgurl} alt="can't load image" />
			<div className="product-info">
				<h5>{item.name}</h5>
				<h4>&#8377;{item.price}</h4>
				<button
					id="cart-btn"
					className="metal-btn addcart-btn metal-rounded metal-neo"
				>
					Remove from Cart<span> </span>
					<i class="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
}

export default AddedProducts;

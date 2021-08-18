import React from "react";
import Rating from "./Rating.jsx";

function ProductCard({ product }) {
	return (
		<div className="card-wrapper">
			<img src={product.imgurl} alt="can't load image" />
			<div className="product-info">
				<h5>{product.name}</h5>
				<h4>&#8377;{product.price}</h4>
				<Rating rating={product.rating} review={product.reviewnum} />
				<button className="metal-btn addcart-btn metal-rounded metal-neo">
					Add to cart<i class="fas fa-cart-plus"></i>
				</button>
			</div>
		</div>
	);
}

export default ProductCard;

import React, { useContext } from "react";
import Rating from "./Rating.jsx";
import CartContext from "../context/cart-context.js";
import { Add_Cart } from "../context/cart-actions.js";

function ProductCard({ product }) {
	const { dispatch } = useContext(CartContext);

	return (
		<div className="card-wrapper">
			<img src={product.imgurl} alt="can't load image" />
			<div className="product-info">
				<h5>{product.name}</h5>
				<h4>&#8377;{product.price}</h4>
				<Rating rating={product.rating} review={product.reviewnum} />
				<button
					onClick={() =>
						dispatch({ type: Add_Cart, payload: product })
					}
					className="metal-btn addcart-btn metal-rounded metal-neo"
				>
					Add to cart<i class="fas fa-cart-plus"></i>
				</button>
			</div>
		</div>
	);
}

export default ProductCard;

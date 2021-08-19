import React, { useContext, useState } from "react";
import Rating from "./Rating.jsx";
import CartContext from "../context/cart-context.js";
import { Add_Cart } from "../context/cart-actions.js";

function ProductCard({ product }) {
	const { dispatch } = useContext(CartContext);
	const [counter, setCounter] = useState(1);
	const quantity = { quantity: counter };

	if (counter < 1) {
		setCounter(1);
	}

	return (
		<div className="card-wrapper">
			<img src={product.imgurl} alt="can't load image" />
			<div className="product-info">
				<h5>{product.name}</h5>
				<h4>&#8377;{product.price}</h4>
				<Rating rating={product.rating} review={product.reviewnum} />
				<div id="quantity" class="qty mt-2 mb-2">
					<span
						onClick={() => setCounter((prev) => prev - 1)}
						class="minus bg-dark"
					>
						-
					</span>
					<input
						type="number"
						class="count"
						name="qty"
						value={counter}
						disabled="true"
					/>
					<span
						class="plus bg-dark"
						onClick={() => setCounter((prev) => prev + 1)}
					>
						+
					</span>
				</div>
				<button
					id="cart-btn"
					onClick={() =>
						dispatch({
							type: Add_Cart,
							payload: { product, quantity },
						})
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

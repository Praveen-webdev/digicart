import React, { useContext } from "react";
import { Remove_Cart } from "../context/cart-actions";
import CartContext from "../context/cart-context";

function AddedProducts({ item, idx }) {
	const { dispatch, totalAmount } = useContext(CartContext);

	return (
		<div className="card-wrapper">
			<img src={item.imgurl} alt="can't load image" />
			<div className="product-info">
				<h5>{item.name}</h5>
				<h6>
					Quantity:
					<span style={{ color: "#B12704FF" }}>{item.quantity}</span>
				</h6>
				<h4 style={{ color: "#FFA41CFF" }}>
					Total :{" "}
					<span style={{ color: "#B12704FF" }}>
						&#8377;{totalAmount[idx]}
					</span>
				</h4>
				<button
					id="cart-btn"
					className="metal-btn addcart-btn metal-rounded metal-neo"
					onClick={() =>
						dispatch({ type: Remove_Cart, payload: item.id })
					}
				>
					Remove from Cart<span> </span>
					<i class="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
}

export default AddedProducts;

import React, { useContext } from "react";
import CartContext from "../context/cart-context";
import AddedProducts from "./AddedProducts.js";
import Total from "./Total.jsx";

function Cart() {
	const { cartItems } = useContext(CartContext);
	return (
		<div>
			<div className="product-wrapper">
				{cartItems.length === 0 ? (
					<div></div>
				) : (
					cartItems.map((item, idx) => (
						<AddedProducts key={item.id} item={item} idx={idx} />
					))
				)}
			</div>
			<Total />
		</div>
	);
}
export default Cart;

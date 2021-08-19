import React, { useContext } from "react";
import CartContext from "../context/cart-context";
import AddedProducts from "./AddedProducts.js";

function Cart() {
	const { cartItems } = useContext(CartContext);
	console.log(cartItems);
	return (
		<div className="product-wrapper">
			{cartItems.length === 0 ? (
				<div></div>
			) : (
				cartItems.map((item) => (
					<AddedProducts key={item.id} item={item} />
				))
			)}
		</div>
	);
}
export default Cart;

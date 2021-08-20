import React, { useContext } from "react";
import CartContext from "../context/cart-context";
import AddedProducts from "./AddedProducts.js";
import Total from "./Total.jsx";
import SubTotal from "./SubTotal.js";
import emptyCart from "../images/vector-illustration-icon-shopping-concept-260nw-502037047.jpg";

function Cart() {
	const { cartItems } = useContext(CartContext);
	return (
		<div>
			<div className="product-wrapper added-products">
				{cartItems.length === 0 ? (
					<img src={emptyCart} alt="emptycart" />
				) : (
					cartItems.map((item, idx) => (
						<AddedProducts key={item.id} item={item} idx={idx} />
					))
				)}
			</div>
			<Total />
			<SubTotal />
		</div>
	);
}
export default Cart;

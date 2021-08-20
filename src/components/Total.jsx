import React, { useContext, useEffect } from "react";
import { lone_Total } from "../context/cart-actions";
import CartContext from "../context/cart-context";

function Total() {
	const { cartItems, dispatch } = useContext(CartContext);

	useEffect(
		() => dispatch({ type: lone_Total, payload: total }),
		[cartItems]
	);
	const total = cartItems.map((item) => item.quantity * item.price);

	return <></>;
}

export default Total;

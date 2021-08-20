import React, { useReducer, useMemo, useState } from "react";
import CartContext from "./cart-context.js";
import cartReducer from "./cart-reducer.js";

const initialState = {
	cartItems: [],
	total: [],
};

function CartState(props) {
	const [input, setInput] = useState("");
	const [search, setSearch] = useState("");

	const [state, dispatch] = useReducer(cartReducer, initialState);

	const memoContext = useMemo(() => {
		return {
			totalAmount: state.total,
			cartItems: state.cartItems,
			dispatch,
			input,
			setInput,
			search,
			setSearch,
		};
	}, [
		state.total,
		state.cartItems,
		dispatch,
		input,
		setInput,
		search,
		setSearch,
	]);
	return (
		<CartContext.Provider value={memoContext}>
			{props.children}
		</CartContext.Provider>
	);
}
export default CartState;

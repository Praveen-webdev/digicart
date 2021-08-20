import React, { useReducer, useMemo } from "react";
import CartContext from "./cart-context.js";
import cartReducer from "./cart-reducer.js";

const initialState = {
	cartItems: [],
	total: [],
};

function CartState(props) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const memoContext = useMemo(() => {
		return {
			totalAmount: state.total,
			cartItems: state.cartItems,
			dispatch,
		};
	}, [state, dispatch]);
	return (
		<CartContext.Provider value={memoContext}>
			{props.children}
		</CartContext.Provider>
	);
}
export default CartState;

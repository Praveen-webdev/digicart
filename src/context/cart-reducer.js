import { Add_Cart, Remove_Cart, lone_Total } from "./cart-actions.js";

const cartReducer = (state, action) => {
	switch (action.type) {
		case Add_Cart:
			return {
				...state,
				cartItems: [
					...state.cartItems,
					{ ...action.payload.product, ...action.payload.quantity },
				],
			};
		case Remove_Cart:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.id !== action.payload
				),
			};
		case lone_Total:
			return {
				...state,
				total: [...action.payload],
			};
		case "Reset":
			return { cartItems: [], total: [] };
		default:
			return state;
	}
};

export default cartReducer;

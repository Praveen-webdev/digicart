import { Add_Cart, Remove_Cart } from "./cart-actions.js";

const cartReducer = (state, action) => {
	switch (action.type) {
		case Add_Cart:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		case Remove_Cart:
			return { ...state };
		default:
			return state;
	}
};

export default cartReducer;

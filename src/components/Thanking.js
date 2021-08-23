import React, { useContext } from "react";
import "./styles/Thanking.css";
import { useHistory } from "react-router-dom";
import CartContext from "../context/cart-context.js";

function Checkout() {
	const { dispatch } = useContext(CartContext);
	const history = useHistory();
	const goHome = () => {
		dispatch({ type: "Reset" });
		history.push("/");
	};
	return (
		<div className="content">
			<div className="wrapper-1">
				<div className="wrapper-2">
					<h1>Thank you !</h1>
					<p>Thanks for purchasing... </p>
					<p>
						{" "}
						Join with us to purchase latest products in the world...{" "}
					</p>
					<button
						onClick={goHome}
						style={{ cursor: "pointer" }}
						className="go-home"
					>
						Continue to shop
					</button>
				</div>
			</div>
		</div>
	);
}

export default Checkout;

import React from "react";
import "./styles/Thanking.css";
import { Link } from "react-router-dom";

function Checkout() {
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
					<Link to="/" className="go-home">
						Continue to shop
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Checkout;

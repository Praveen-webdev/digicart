import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart-context";
import { Link } from "react-router-dom";

function SubTotal() {
	const { totalAmount } = useContext(CartContext);
	useEffect(() =>
		setSubTotal(
			totalAmount.reduce((prev, current) => prev + current, 0),
			[totalAmount]
		)
	);

	const [subTotal, setSubTotal] = useState(3);

	return (
		<div
			className="subtotal container-fluid text-center pb-3 "
			style={{
				background: "#ffffffff",
				position: "sticky",
				bottom: "0",
			}}
		>
			<h2>
				Subtotal ({totalAmount.length} items):{" "}
				<strong style={{ color: "#B12704FF" }}>
					&#8377;{subTotal}
				</strong>
			</h2>
			{totalAmount.length !== 0 ? (
				<Link
					to="/thanking"
					style={{ textDecoration: "none" }}
					className="metal-btn mb-3"
				>
					Proceed to Checkout
				</Link>
			) : (
				<Link
					to="/"
					style={{ textDecoration: "none" }}
					className="metal-btn mb-3"
				>
					Continue to shop
				</Link>
			)}
		</div>
	);
}

export default SubTotal;

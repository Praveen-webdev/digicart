import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart-context";

function SubTotal() {
	const { totalAmount } = useContext(CartContext);
	useEffect(() =>
		setSubTotal(
			totalAmount.reduce((prev, current) => prev + current, 0),
			[totalAmount]
		)
	);

	const [subTotal, setSubTotal] = useState(3);

	return <div>{subTotal}</div>;
}

export default SubTotal;

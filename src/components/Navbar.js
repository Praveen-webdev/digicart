import React, { useContext } from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import CartContext from "../context/cart-context";

function Navbar() {
	const { cartItems, setInput, setSearch, input } = useContext(CartContext);
	const submitHandler = (e) => {
		setSearch(input);
		e.preventDefault();
		setInput("");
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-dark sticky-top ">
			<h2 className="navbar-brand" style={{ cursor: "default" }}>
				<i className="fab fa-digital-ocean"></i>Digicart
			</h2>
			<Link className="user  ">
				<i className="fal fa-user"></i>
			</Link>
			<Link className="cart  " to="/cart">
				<span>{cartItems.length}</span>
				<i className="fas fa-cart-plus"></i>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar-collapse collapse" id="navbarTogglerDemo02">
				<ul
					className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto"
					id="navbaritems"
				>
					<Link to="/" onClick={() => setSearch("")}>
						<li className="nav-item active">Home</li>
					</Link>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							All products
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdown"
						>
							<Link
								className="dropdown-item"
								onClick={() => setSearch("headphones")}
								style={{ color: "#1e2d7dff" }}
							>
								Headphones
							</Link>
							<div className="dropdown-divider"></div>
							<Link
								className="dropdown-item"
								onClick={() => setSearch("speakers")}
								style={{ color: "#1e2d7dff" }}
							>
								Portable speakers
							</Link>
						</div>
					</li>
					<Link>
						<li className="nav-item ">Brands</li>
					</Link>
					<Link>
						<li className="nav-item ">Contact</li>
					</Link>
				</ul>
				<form className="my-2 my-lg-0" onSubmit={submitHandler}>
					<div className="input-group">
						<input
							onChange={(e) => setInput(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Search products..."
							value={input}
						/>
						<button className="btn ">
							<i className="fab fa-searchengin"></i>
						</button>
					</div>
				</form>
			</div>
		</nav>
	);
}

export default Navbar;

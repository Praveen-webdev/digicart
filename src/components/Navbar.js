import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark sticky-top ">
			<h2 className="navbar-brand">
				<i class="fab fa-digital-ocean"></i>Digicart
			</h2>
			<div className="user ">
				<i class="fal fa-user"></i>
			</div>
			<div className="cart ">
				<span>0</span>
				<i class="fas fa-cart-plus"></i>
			</div>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div className="navbar-collapse collapse" id="navbarTogglerDemo02">
				<ul
					className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto"
					id="navbaritems"
				>
					<Link to="/">
						<li className="nav-item active">Home</li>
					</Link>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
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
							class="dropdown-menu"
							aria-labelledby="navbarDropdown"
						>
							<Link
								className="dropdown-item"
								style={{ color: "#1e2d7dff" }}
							>
								Headphones
							</Link>
							<div class="dropdown-divider"></div>
							<Link
								className="dropdown-item"
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
				<form className=" my-2 my-lg-0">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Search products..."
						/>
						<button className="btn ">
							<i class="fab fa-searchengin"></i>
						</button>
					</div>
				</form>
			</div>
		</nav>
	);
}

export default Navbar;

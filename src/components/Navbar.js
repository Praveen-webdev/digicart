import React, { useState } from "react";
import "./styles/Navbar.css";

function Navbar() {
	return (
		<div id="navbar">
			<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
				<h2 className="navbar-brand">Digicart</h2>
				<div className="user ">user</div>
				<div className="cart ">cart</div>
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
				<div
					className="navbar-collapse collapse"
					id="navbarTogglerDemo02"
				>
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto">
						<li className="nav-item active">Home</li>
					</ul>
					<form className=" my-2 my-lg-0">
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Search products..."
							/>
							<button className="btn bg-transparent">
								Search
							</button>
						</div>
					</form>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

import React from "react";
import "./styles/Home.css";
import products from "./data.js";
import ProductCard from "./ProductCard.jsx";

function Home() {
	return (
		<section className="home">
			<div
				id="carouselExampleIndicators"
				class="carousel slide"
				data-ride="carousel"
			>
				<ol class="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						class="active"
					></li>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="1"
					></li>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="2"
					></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="d-block w-100 slide-1 " />
						<div class="carousel-caption  d-md-block">
							<h5>The best performing products in the world</h5>
							<p>
								Our mission is to provide the best experience in
								the audio industry
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100 slide-2" />
						<div class="carousel-caption  d-md-block">
							<h5>Introducing: the Headphones Collection</h5>
							<p>
								Discover our selection of the best headphones of
								the year
							</p>
							<button className="metal-btn">
								Shop All Headphones
							</button>
						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100 slide-3" />
						<div class="carousel-caption  d-md-block">
							<h5>New Portable Speakers</h5>
							<p>Discover the brand new speakers ,by JBL</p>
							<button className="metal-btn">
								Shop JBL Clip 3
							</button>
						</div>
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span
						class="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next"
				>
					<span
						class="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			<div className="product-wrapper">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}

export default Home;

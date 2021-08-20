import React from "react";
import { v4 } from "uuid";

const Rating = ({ rating, review }) => {
	return (
		<div className="rating-info">
			<span className="rating">
				{[1, 2, 3, 4, 5].map((rate) => (
					<i
						key={v4()}
						style={{ color: "#FFBD00FF" }}
						className={
							rating + 1 === rate + 0.5
								? "fas fa-star-half-alt"
								: rating >= rate
								? "fas fa-star"
								: "far fa-star"
						}
					></i>
				))}
			</span>
			<span className="reviews" style={{ color: "#89817DFF" }}>
				{review === 0 ? "No review" : `${review} reviews`}
			</span>
		</div>
	);
};

export default Rating;

import React, { useEffect, useState } from "react";

import "./products.css";
const Product = ({ product }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		let slideShowInterval;

		if (isHovered) {
			slideShowInterval = setInterval(() => {
				setCurrentIndex(prevIndex => (prevIndex + 1) % product.images.length);
			}, 1000);
		}

		return () => {
			clearInterval(slideShowInterval);
		};
	}, [isHovered, product.images]);

	return (
		<div
			className={`product_card ${isHovered ? "hovered" : ""}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="image_container">
				<img src={product.images[currentIndex]} alt={product.name} className="product_image" />
			</div>
			<div className="product_details">
				<h4 className="product_title">{product.title}</h4>
				<p className="product_price">{product.price}</p>
				<a href="#">Buy Now</a>
			</div>
		</div>
	);
};

export default Product;

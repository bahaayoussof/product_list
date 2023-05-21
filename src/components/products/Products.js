import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";

import "./products.css";
const Products = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.products);
	const { productList, loading, errorMessage } = state;
	console.log("Products.js:10 ~ Products ~ errorMessage:", errorMessage);

	const getProductsHandler = async () => {
		try {
			await dispatch(getProducts());
		} catch (err) {
			console.log("Products.js:14 ~ getProductsHandler ~ err:", err);
		}
	};

	useEffect(() => {
		getProductsHandler();
	}, []);

	return (
		<div className="page_container">
			{!loading && errorMessage && <p className="error_message">{errorMessage}</p>}
			{!loading &&
				productList?.map(product => (
					<div className="card" key={product.id}>
						<div className="image_container">
							<img src={product.images[0]} alt={product.title} className="product_image" />
						</div>
						<div className="product_details">
							<h3 className="product_title">{product.title}</h3>
							<p className="product_price">{product.price}</p>
							<a href="#">Buy Now</a>
						</div>
					</div>
				))}
		</div>
	);
};

export default Products;

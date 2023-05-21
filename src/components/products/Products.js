import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";
import Product from "./Product";

import "./products.css";
const Products = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.products);
	const { productList, loading, errorMessage } = state;

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
			{!loading && productList?.map(product => <Product key={product.id} product={product} />)}
		</div>
	);
};

export default Products;

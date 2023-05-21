import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productsReducer from "./productsSlice";

const reducers = combineReducers({
	products: productsReducer,
});

export const store = configureStore({
	reducer: reducers,
});

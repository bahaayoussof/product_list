import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api";

const initialState = {
	productList: [],
	loading: false,
	errorMessage: null,
};

export const getProducts = createAsyncThunk("getProducts", async (_, thunkAPI) => {
	try {
		const response = await axios.get(`products`);
		return response.data.products;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
});

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getProducts.pending, state => {
				state.loading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.productList = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = false;
				state.errorMessage = action.payload;
			});
	},
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { ProductData } from "../../types";
import type { RootState } from "../store";

interface MyProductsState {
	products: ProductData[];
}

const initialState: MyProductsState = {
	products: [],
};

export const myProductsSlice = createSlice({
	name: "myProducts",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction) => {
			console.log("Adicionando...");
		},
		removeProduct: (state, action: PayloadAction) => {
			console.log("Removendo...");
		},
	},
});

export const useMyProductsSelect = (state: RootState) => state.myProducts;
export const { addProduct, removeProduct } = myProductsSlice.actions;
export const myProductsReducer = myProductsSlice.reducer;

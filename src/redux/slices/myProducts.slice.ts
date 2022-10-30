import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { ProductCart } from "../../types";
import type { RootState } from "../store";

interface MyProductsState {
	products: ProductCart[];
}

export interface AddProductAction {
	id: string;
	quantity: number;
}

const initialState: MyProductsState = {
	products: [],
};

export const myProductsSlice = createSlice({
	name: "myProducts",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<AddProductAction>) => {
			const product = {
				id: action.payload.id,
				quantity: action.payload.quantity,
			};

			state.products.push(product);
		},
		removeProduct: (state, action: PayloadAction) => {
			console.log("Removendo...");
		},
	},
});

export const useMyProductsSelect = (state: RootState) => state.myProducts;
export const { addProduct, removeProduct } = myProductsSlice.actions;
export const myProductsReducer = myProductsSlice.reducer;

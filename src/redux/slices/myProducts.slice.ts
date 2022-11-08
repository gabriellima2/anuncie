import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getSpecificProduct } from "../../utils/getSpecificProduct";
import type { CartProductData, ProductData } from "../../types";
import type { RootState } from "../store";

interface MyProductsState {
	products: CartProductData[];
	isEmpty: boolean;
}

export interface AddProductAction
	extends Pick<CartProductData, "id" | "quantity"> {}

export interface RemoveProductAction extends Pick<ProductData, "id"> {}

export interface ChangeProductQuantityAction
	extends Pick<CartProductData, "id" | "quantity"> {}

const initialState: MyProductsState = {
	products: [],
	isEmpty: true,
};

export const myProductsSlice = createSlice({
	name: "myProducts",
	initialState,
	reducers: {
		addProduct: (state, { payload }: PayloadAction<AddProductAction>) => {
			const product = {
				...getSpecificProduct(payload.id),
				quantity: payload.quantity,
			};

			state.products.push(product);

			if (state.isEmpty) {
				state.isEmpty = false;
			}
		},
		removeProduct: (state, { payload }: PayloadAction<RemoveProductAction>) => {
			state.products = state.products.filter((product) => {
				if (product.id !== payload.id) return product;
			});
		},
		changeProductQuantity: (
			state,
			{ payload }: PayloadAction<ChangeProductQuantityAction>
		) => {
			state.products = state.products.map((product) => {
				if (product.id === payload.id) {
					return {
						...product,
						quantity: payload.quantity,
					};
				}

				return product;
			});
		},
	},
});

export const useMyProductsSelect = (state: RootState) => state.myProducts;
export const { addProduct, removeProduct, changeProductQuantity } =
	myProductsSlice.actions;
export const myProductsReducer = myProductsSlice.reducer;

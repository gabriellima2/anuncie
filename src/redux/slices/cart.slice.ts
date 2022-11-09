import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { getSpecificProduct } from "../../utils/getSpecificProduct";

import type { CartProductData, ProductData } from "../../types";
import type { RootState } from "../store";

interface CartState {
	products: CartProductData[];
	isEmpty: boolean;
}

export interface AddProductAction
	extends Pick<CartProductData, "id" | "quantity"> {}

export interface RemoveProductAction extends Pick<ProductData, "id"> {}

export interface ChangeProductQuantityAction
	extends Pick<CartProductData, "id" | "quantity"> {}

const initialState: CartState = {
	products: [],
	isEmpty: true,
};

export const cartSlice = createSlice({
	name: "cart",
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

export const useCartSelect = () =>
	useSelector((state: RootState) => state.cart);
export const { addProduct, removeProduct, changeProductQuantity } =
	cartSlice.actions;
export const cartReducer = cartSlice.reducer;

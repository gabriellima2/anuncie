import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { formatCurrencyValue } from "@utils/formatCurrencyValue";
import { getProduct } from "@utils/getProduct";
import { products } from "@mocks/products";

import type { RootState } from "@redux/store";
import type { ICartProduct } from "@interfaces/IProduct";

interface CartState {
	products: ICartProduct[];
	isEmpty: boolean;
	total: number;
}

export interface AddProductAction
	extends Pick<ICartProduct, "id" | "quantity"> {}

export interface RemoveProductAction extends Pick<ICartProduct, "id"> {}

export interface ChangeProductQuantityAction
	extends Pick<ICartProduct, "id" | "quantity"> {}

const initialState: CartState = {
	products: [],
	isEmpty: true,
	total: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, { payload }: PayloadAction<AddProductAction>) => {
			const productFound = getProduct.byId(products, payload.id);

			if (productFound) {
				const product = {
					...productFound,
					quantity: payload.quantity,
				};
				const formattedPrice = formatCurrencyValue(product.price);

				state.products.push(product);
				state.total += formattedPrice * product.quantity;

				if (state.isEmpty) {
					state.isEmpty = false;
				}
			}
		},
		removeProduct: (state, { payload }: PayloadAction<RemoveProductAction>) => {
			state.products = state.products.filter((product) => {
				if (product.id !== payload.id) return product;

				const formattedPrice = formatCurrencyValue(product.price);
				state.total -= formattedPrice * product.quantity;
			});

			if (!state.isEmpty && state.products.length === 0) {
				state.isEmpty = true;
				state.total = 0;
			}
		},
		changeProductQuantity: (
			state,
			{ payload }: PayloadAction<ChangeProductQuantityAction>
		) => {
			state.products = state.products.map((product) => {
				if (product.id !== payload.id) return product;

				const formattedPrice = formatCurrencyValue(product.price);
				const prevProductTotal = formattedPrice * product.quantity;
				const newProductTotal = formattedPrice * payload.quantity;

				// Usuário aumentou a quantidade do produto
				if (product.quantity < payload.quantity) {
					const stateWithoutPrevProductTotal = state.total - prevProductTotal;
					state.total = stateWithoutPrevProductTotal + newProductTotal;

					// Usuário diminui a quantidade do produto
				} else if (product.quantity > payload.quantity) {
					const difference = prevProductTotal - newProductTotal;
					state.total -= difference;
				}

				return {
					...product,
					quantity: payload.quantity,
				};
			});
		},
	},
});

export const useCartSelect = () =>
	useSelector((state: RootState) => state.cart);
export const { addProduct, removeProduct, changeProductQuantity } =
	cartSlice.actions;
export const cartReducer = cartSlice.reducer;

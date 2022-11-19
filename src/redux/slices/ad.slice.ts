import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

import type { AdProductData } from "src/types";

interface AdState {
	products: AdProductData[];
	isEmpty: boolean;
}

interface RemoveAdProductAction extends Pick<AdProductData, "id"> {}
interface EditAdProductAction extends Pick<AdProductData, "id"> {
	editedProduct: Omit<AdProductData, "id" | "soldBy">;
}

const initialState: AdState = {
	products: [],
	isEmpty: true,
};

export const adSlice = createSlice({
	name: "ad",
	initialState,
	reducers: {
		setAdProduct: (state, action: PayloadAction<AdProductData>) => {
			state.products.push(action.payload);
		},

		editAdProduct: (state, { payload }: PayloadAction<EditAdProductAction>) => {
			state.products = state.products.map((product) => {
				if (product.id !== payload.id) return product;

				return {
					...product,
					...payload.editedProduct,
				};
			});
		},

		removeAdProduct: (
			state,
			{ payload }: PayloadAction<RemoveAdProductAction>
		) => {
			state.products = state.products.filter((product) => {
				if (product.id !== payload.id) return product;
			});
		},
	},
});

export const useAdSelect = () => useSelector((state: RootState) => state.ad);
export const { setAdProduct, editAdProduct, removeAdProduct } = adSlice.actions;
export const adReducer = adSlice.reducer;

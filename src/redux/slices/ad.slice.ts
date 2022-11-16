import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

import type { AdProductData } from "src/types";

interface AdState {
	products: AdProductData[];
	isEmpty: boolean;
}

const initialState: AdState = {
	products: [],
	isEmpty: true,
};

export const adSlice = createSlice({
	name: "ad",
	initialState,
	reducers: {
		addNewProductAd: (state, action: PayloadAction<AdProductData>) => {
			state.products.push(action.payload);
		},

		removeProductAd: (state, action: PayloadAction) => {},

		editProductAd: (state, action: PayloadAction) => {},
	},
});

export const useAdSelect = () => useSelector((state: RootState) => state.ad);
export const { addNewProductAd, removeProductAd, editProductAd } =
	adSlice.actions;
export const adReducer = adSlice.reducer;

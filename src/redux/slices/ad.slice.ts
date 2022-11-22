import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import type { RootState } from "@redux/store";
import type { IAdProduct } from "@interfaces/IProduct";

interface AdState {
	products: IAdProduct[];
	isEmpty: boolean;
}

interface RemoveAdProductAction extends Pick<IAdProduct, "id"> {}
interface EditAdProductAction extends Pick<IAdProduct, "id"> {
	editedProduct: Omit<IAdProduct, "id" | "soldBy">;
}

const initialState: AdState = {
	products: [],
	isEmpty: true,
};

export const adSlice = createSlice({
	name: "ad",
	initialState,
	reducers: {
		setAdProduct: (state, action: PayloadAction<IAdProduct>) => {
			state.products.push(action.payload);

			if (state.isEmpty) {
				state.isEmpty = false;
			}
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

			if (!state.isEmpty && state.products.length === 0) {
				state.isEmpty = true;
			}
		},
	},
});

export const useAdSelect = () => useSelector((state: RootState) => state.ad);
export const { setAdProduct, editAdProduct, removeAdProduct } = adSlice.actions;
export const adReducer = adSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import { myProductsReducer } from "./slices/myProducts.slice";

export const store = configureStore({
	reducer: {
		myProducts: myProductsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

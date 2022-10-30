import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { haveSameProductInCart } from "./middlewares/myProducts.middleware";
import { myProductsReducer } from "./slices/myProducts.slice";

export const store = configureStore({
	reducer: {
		myProducts: myProductsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(haveSameProductInCart),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

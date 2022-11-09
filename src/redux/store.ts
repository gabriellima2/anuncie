import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { haveSameProductInCart } from "./middlewares/myProducts.middleware";

import { cartReducer } from "./slices/cart.slice";
import { toastReducer } from "./slices/toast.slice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		toast: toastReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(haveSameProductInCart),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

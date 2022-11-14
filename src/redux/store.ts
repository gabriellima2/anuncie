import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { haveSameProductInCart } from "./middlewares/cart.middleware";
import { reducers } from "./reducers";

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(haveSameProductInCart),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

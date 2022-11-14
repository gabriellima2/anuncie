import { combineReducers } from "@reduxjs/toolkit";

import { adReducer } from "./slices/ad.slice";
import { cartReducer } from "./slices/cart.slice";
import { toastReducer } from "./slices/toast.slice";

export const reducers = combineReducers({
	cart: cartReducer,
	toast: toastReducer,
	ad: adReducer,
});

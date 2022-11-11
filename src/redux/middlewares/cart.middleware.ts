import type {
	AnyAction,
	Dispatch,
	Middleware,
	MiddlewareAPI,
	PayloadAction,
} from "@reduxjs/toolkit";

import type { AddProductAction } from "@redux/slices/cart.slice";
import type { RootState } from "@redux/store";

type Store = MiddlewareAPI<Dispatch<AnyAction>, RootState>;

export const haveSameProductInCart: Middleware =
	(store: Store) => (next) => (action: PayloadAction<AddProductAction>) => {
		if (action.type !== "cart/addProduct") return next(action);

		const { cart } = store.getState();

		const sameProduct = cart.products.filter((product) => {
			if (product.id === action.payload.id) return product;
		});

		if (sameProduct.length === 0) return next(action);
	};

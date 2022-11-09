import type {
	AnyAction,
	Dispatch,
	Middleware,
	MiddlewareAPI,
	PayloadAction,
} from "@reduxjs/toolkit";
import type { AddProductAction } from "../slices/cart.slice";
import type { RootState } from "../store";

type Store = MiddlewareAPI<Dispatch<AnyAction>, RootState>;

export const haveSameProductInCart: Middleware =
	(store: Store) => (next) => (action: PayloadAction<AddProductAction>) => {
		if (action.type !== "myProducts/addProduct") return next(action);

		const { myProducts } = store.getState();

		const sameProduct = myProducts.products.filter((product) => {
			if (product.id === action.payload.id) return product;
		});

		if (!sameProduct.length) return next(action);
	};

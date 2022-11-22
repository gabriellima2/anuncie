import type { IProduct } from "@interfaces/IProduct";

export const getProduct = {
	byId: (products: IProduct[], id: string) => {
		return products.find((product) => product.id === id);
	},

	byName: (products: IProduct[], name: string) => {
		return products.filter((product) => {
			if (product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
				return product;
		});
	},
};

import { ProductData } from "src/types";

export function getSpecificProduct(products: ProductData[], id: string) {
	const [product] = products.filter((product) => {
		if (product.id === id) return product;
	});

	return product;
}

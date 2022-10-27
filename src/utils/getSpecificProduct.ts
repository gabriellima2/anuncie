import { products } from "../mocks/products";

export function getSpecificProduct(id: string) {
	const [product] = products.filter((product) => {
		if (product.id === id) return product;
	});

	return product;
}

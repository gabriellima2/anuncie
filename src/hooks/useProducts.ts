import { useAdSelect } from "@redux/slices/ad.slice";
import { products as productsMock } from "@mocks/products";

export function useProducts() {
	const { products } = useAdSelect();

	return [...products, ...productsMock];
}

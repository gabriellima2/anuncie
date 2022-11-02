import { useSelector } from "react-redux";

import { useMyProductsSelect } from "../../redux/slices/myProducts.slice";

import { CartProducts } from "../../components/Products/CartProducts";

import { AppLayout } from "../../layouts/AppLayout";

export const CartScreen = () => {
	const { products } = useSelector(useMyProductsSelect);

	return (
		<AppLayout>
			<CartProducts products={products} />
		</AppLayout>
	);
};

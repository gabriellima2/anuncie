import { useSelector } from "react-redux";

import { useMyProductsSelect } from "../../redux/slices/myProducts.slice";

import { CartProducts } from "../../components/Products/CartProducts";
import { Empty } from "../../components/Empty";

import { AppLayout } from "../../layouts/AppLayout";

export const CartScreen = () => {
	const { products, isEmpty } = useSelector(useMyProductsSelect);

	if (isEmpty)
		return (
			<AppLayout>
				<Empty element="Carrinho" />
			</AppLayout>
		);

	return (
		<AppLayout>
			<CartProducts products={products} />
		</AppLayout>
	);
};

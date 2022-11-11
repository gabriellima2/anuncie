import { useCartSelect } from "@redux/slices/cart.slice";

import { CartProducts } from "@components/Products/CartProducts";
import { Empty } from "@components/Empty";

import { AppLayout } from "@layouts/AppLayout";

export const CartScreen = () => {
	const { products, isEmpty } = useCartSelect();

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

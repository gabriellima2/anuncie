import { useCartSelect } from "@redux/slices/cart.slice";

import { CartProduct } from "@components/Products/CartProduct";
import { ProductList } from "@components/ProductList";
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
			<ProductList products={products} ProductItem={CartProduct} />
		</AppLayout>
	);
};

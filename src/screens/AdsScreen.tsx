import { useAdSelect } from "@redux/slices/ad.slice";

import { AdProduct } from "@components/Products/AdProduct";
import { ProductList } from "@components/ProductList";
import { Empty } from "@components/Empty";

import { AppLayout } from "@layouts/AppLayout";

export const AdsScreen = () => {
	const { products, isEmpty } = useAdSelect();

	if (isEmpty)
		return (
			<AppLayout>
				<Empty message="Nenhum anúncio encontrado" />
			</AppLayout>
		);

	return (
		<AppLayout>
			<ProductList products={products} ProductItem={AdProduct} />
		</AppLayout>
	);
};

import { useAdSelect } from "@redux/slices/ad.slice";

import { AdProduct } from "@components/Products/AdProduct";
import { ProductList } from "@components/ProductList";
import { Error } from "@components/Error";

import { AppLayout } from "@layouts/AppLayout";

export const AdsScreen = () => {
	const { products, isEmpty } = useAdSelect();

	if (isEmpty) return <Error message="Nenhum anúncio encontrado" />;

	return (
		<AppLayout addHorizontalSpacing={false}>
			<ProductList products={products} ProductItem={AdProduct} />
		</AppLayout>
	);
};

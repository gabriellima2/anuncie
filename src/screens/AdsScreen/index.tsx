import { useAdSelect } from "@redux/slices/ad.slice";

import { AdProduct } from "@components/Products/AdProduct";
import { ProductList } from "@components/ProductList";

import { AppLayout } from "@layouts/AppLayout";

export const AdsScreen = () => {
	const { products } = useAdSelect();

	return (
		<AppLayout>
			<ProductList products={products} ProductItem={AdProduct} />
		</AppLayout>
	);
};

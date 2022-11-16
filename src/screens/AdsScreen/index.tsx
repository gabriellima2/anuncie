import { useAdSelect } from "@redux/slices/ad.slice";

import { AdProduct } from "@components/Products/AdProduct";
import { NewAdLink } from "@components/Links/NewAdLink";
import { ProductList } from "@components/ProductList";

import { AppLayout } from "@layouts/AppLayout";

export const AdsScreen = () => {
	const { products } = useAdSelect();

	return (
		<AppLayout>
			<NewAdLink />
			<ProductList products={products} ProductItem={AdProduct} />
		</AppLayout>
	);
};

import { useProducts } from "@hooks/useProducts";

import { ExploreProduct } from "@components/Products/ExploreProduct";
import { ProductList } from "@components/ProductList";
import { SearchBar } from "@components/SearchBar";

import { AppLayout } from "@layouts/AppLayout";

export const HomeScreen = () => {
	const products = useProducts();

	return (
		<AppLayout addHorizontalSpacing={false}>
			<SearchBar />
			<ProductList
				products={products}
				ProductItem={ExploreProduct}
				numColumns={2}
				style={{ marginTop: 8 }}
				columnWrapperStyle={{ justifyContent: "space-between" }}
			/>
		</AppLayout>
	);
};

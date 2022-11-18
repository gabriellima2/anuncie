import { useAdSelect } from "@redux/slices/ad.slice";

import { ExploreProduct } from "@components/Products/ExploreProduct";
import { ProductList } from "@components/ProductList";
import { SearchBar } from "@components/SearchBar";

import { AppLayout } from "@layouts/AppLayout";

import { products as productsMock } from "@mocks/products";

export const HomeScreen = () => {
	const { products } = useAdSelect();

	return (
		<AppLayout addHorizontalSpacing={false}>
			<ProductList
				products={[...productsMock, ...products]}
				ProductItem={ExploreProduct}
				numColumns={2}
				style={{ marginTop: 8 }}
				columnWrapperStyle={{ justifyContent: "space-between" }}
				contentContainerStyle={{ paddingBottom: 84, paddingHorizontal: 12 }}
				ListHeaderComponent={() => (
					<SearchBar handleSearch={(value) => console.log(value)} />
				)}
			/>
		</AppLayout>
	);
};

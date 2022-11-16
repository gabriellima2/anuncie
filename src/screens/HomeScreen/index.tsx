import { ExploreProduct } from "@components/Products/ExploreProduct";
import { ProductList } from "@components/ProductList";
import { SearchBar } from "@components/SearchBar";

import { AppLayout } from "@layouts/AppLayout";

import { products } from "@mocks/products";

export const HomeScreen = () => {
	return (
		<AppLayout addVerticalSpacing={false}>
			<ProductList
				products={products}
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

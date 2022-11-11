import { CommonProducts } from "@components/Products/CommonProducts";
import { SearchBar } from "@components/SearchBar";

import { AppLayout } from "@layouts/AppLayout";

import { products } from "@mocks/products";

export const HomeScreen = () => {
	return (
		<AppLayout addVerticalSpacing={false}>
			<CommonProducts
				products={products}
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

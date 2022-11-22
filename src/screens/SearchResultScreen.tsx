import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useProducts } from "@hooks/useProducts";

import { ExploreProduct } from "@components/Products/ExploreProduct";
import { ProductList } from "@components/ProductList";
import { SearchBar } from "@components/SearchBar";
import { Error } from "@components/Error";

import { AppLayout } from "@layouts/AppLayout";

import { getProduct } from "@utils/getProduct";
import type { TStackParams } from "@globalTypes/TStack";

interface SearchResultScreenProps
	extends NativeStackScreenProps<TStackParams, "SearchResult"> {}

export const SearchResultScreen = (props: SearchResultScreenProps) => {
	const products = useProducts();

	const searchValue = props.route.params.searchValue;
	const productsFound = getProduct.byName(products, searchValue);

	return (
		<AppLayout addHorizontalSpacing={false}>
			<SearchBar />
			{productsFound.length === 0 ? (
				<Error message="Nenhum produto encontrado, desculpe!" />
			) : (
				<ProductList
					products={productsFound}
					ProductItem={ExploreProduct}
					numColumns={2}
					style={{ marginTop: 8 }}
					columnWrapperStyle={{ justifyContent: "space-between" }}
				/>
			)}
		</AppLayout>
	);
};

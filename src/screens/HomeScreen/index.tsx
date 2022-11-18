import { View } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useAdSelect } from "@redux/slices/ad.slice";

import { ExploreProduct } from "@components/Products/ExploreProduct";
import { ProductList } from "@components/ProductList";
import { SearchBar } from "@components/SearchBar";

import { AppLayout } from "@layouts/AppLayout";

import { products as productsMock } from "@mocks/products";

export const HomeScreen = () => {
	const { products } = useAdSelect();
	const tabBarHeight = useBottomTabBarHeight();

	return (
		<AppLayout addHorizontalSpacing={false}>
			<View style={{ paddingBottom: 8, paddingHorizontal: 12 }}>
				<SearchBar handleSearch={(value) => console.log(value)} />
			</View>
			<ProductList
				products={[...productsMock, ...products]}
				ProductItem={ExploreProduct}
				numColumns={2}
				style={{ marginTop: 8 }}
				columnWrapperStyle={{ justifyContent: "space-between" }}
				contentContainerStyle={{
					paddingBottom: tabBarHeight,
					paddingHorizontal: 12,
				}}
			/>
		</AppLayout>
	);
};

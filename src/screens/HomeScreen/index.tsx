import { View } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useProducts } from "@hooks/useProducts";

import { ExploreProduct } from "@components/Products/ExploreProduct";
import { ProductList } from "@components/ProductList";
import { SearchBar } from "@components/SearchBar";

import { AppLayout } from "@layouts/AppLayout";

export const HomeScreen = () => {
	const products = useProducts();
	const tabBarHeight = useBottomTabBarHeight();

	return (
		<AppLayout addHorizontalSpacing={false}>
			<View style={{ paddingBottom: 8, paddingHorizontal: 12 }}>
				<SearchBar handleSearch={(value) => console.log(value)} />
			</View>
			<ProductList
				products={products}
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

import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, FlatListProps } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { IProduct } from "@interfaces/IProduct";

interface ProductListProps<TProductItem extends IProduct>
	extends Omit<
		FlatListProps<TProductItem>,
		"data" | "renderItem" | "keyExtractor"
	> {
	products: TProductItem[];
	ProductItem: (props: TProductItem) => JSX.Element;
}

export const ProductList = <TProductItem extends IProduct>({
	products,
	ProductItem,
	...props
}: ProductListProps<TProductItem>) => {
	const tabBarHeight = useBottomTabBarHeight();

	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<TProductItem>) => <ProductItem {...item} />,
		[]
	);

	const keyExtractor = useCallback(({ id }: TProductItem) => id, []);

	return (
		<FlatList<TProductItem>
			{...props}
			data={products}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			contentContainerStyle={{
				paddingBottom: tabBarHeight,
				paddingHorizontal: 12,
			}}
		/>
	);
};

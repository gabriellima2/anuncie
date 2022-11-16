import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, FlatListProps } from "react-native";

import type { ProductData } from "src/types";

interface ProductListProps<TProduct extends ProductData>
	extends Omit<
		FlatListProps<TProduct>,
		"data" | "renderItem" | "keyExtractor"
	> {
	products: TProduct[];
	ProductItem: (props: TProduct) => JSX.Element;
}

export const ProductList = <TProduct extends ProductData>({
	products,
	ProductItem,
	...props
}: ProductListProps<TProduct>) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<TProduct>) => <ProductItem {...item} />,
		[]
	);

	const keyExtractor = useCallback(({ id }: TProduct) => id, []);

	return (
		<FlatList<TProduct>
			{...props}
			data={products}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
		/>
	);
};

import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, FlatListProps } from "react-native";

import type { IProduct } from "@interfaces/IProduct";

interface ProductListProps<TProduct extends IProduct>
	extends Omit<
		FlatListProps<TProduct>,
		"data" | "renderItem" | "keyExtractor"
	> {
	products: TProduct[];
	ProductItem: (props: TProduct) => JSX.Element;
}

export const ProductList = <TProduct extends IProduct>({
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

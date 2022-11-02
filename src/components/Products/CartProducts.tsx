import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { QuantityButton } from "../Buttons/QuantityButton";
import { Product } from "./Product";

import type { CartProductData, FlatListProduct } from "../../types";

interface CartProductsProps extends FlatListProduct<CartProductData> {
	products: CartProductData[];
}

export const CartProduct = (props: CartProductData) => {
	return (
		<Product
			{...props}
			style={{ flexDirection: "row" }}
			image={{ width: 100, height: 100 }}
		>
			<QuantityButton
				initialQuantity={props.quantity}
				maxQuantity={props.availableQuantity}
			/>
		</Product>
	);
};

export const CartProducts = ({ products, ...props }: CartProductsProps) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<CartProductData>) => (
			<CartProduct {...item} />
		),
		[]
	);

	const keyExtractor = useCallback(({ id }: CartProductData) => id, []);

	return (
		<FlatList
			{...props}
			data={products}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
		/>
	);
};

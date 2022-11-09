import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { useDispatch } from "react-redux";
import { changeProductQuantity } from "../../redux/slices/cart.slice";

import { QuantityButton } from "../Buttons/QuantityButton";
import { RemoveButton } from "../Buttons/RemoveButton";
import { Product } from "./Product";

import type { CartProductData, FlatListProduct } from "../../types";

interface CartProductsProps extends FlatListProduct<CartProductData> {
	products: CartProductData[];
}

export const CartProduct = (props: CartProductData) => {
	const dispatch = useDispatch();

	const handleQuantityChange = (newQuantity: number) => {
		dispatch(changeProductQuantity({ id: props.id, quantity: newQuantity }));
	};

	return (
		<Product
			{...props}
			direction="row"
			image={{ width: 100, height: 100 }}
			additionalText={`${props.availableQuantity} Unidades disponíveis`}
		>
			<RemoveButton productID={props.id} style={{ marginBottom: 24 }} />
			<QuantityButton
				initialQuantity={props.quantity}
				maxQuantity={props.availableQuantity}
				handleQuantityChange={handleQuantityChange}
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

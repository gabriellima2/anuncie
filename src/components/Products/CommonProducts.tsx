import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FlatList, ListRenderItemInfo } from "react-native";

import { useReactNavigation } from "../../hooks/useReactNavigation";
import { addProduct } from "../../redux/slices/cart.slice";

import { AddToCartButton } from "../Buttons/AddToCartButton";
import { Product } from "./Product";
import { Link } from "../Link";

import type { FlatListProduct, ProductData } from "../../types";

interface CommonProductProps
	extends Omit<ProductData, "availableQuantity" | "description"> {}

interface CommonProductsProps extends FlatListProduct<ProductData> {
	products: ProductData[];
}

export const CommonProduct = (props: CommonProductProps) => {
	const dispatch = useDispatch();
	const navigation = useReactNavigation();

	const handleAddProductToCart = useCallback(() => {
		dispatch(addProduct({ id: props.id, quantity: 1 }));
	}, []);

	return (
		<Link
			onPress={() => navigation.navigate("Details", { id: props.id })}
			accessibilityLabel="Ver mais detalhes do produto"
			accessibilityHint="Vai para a página de detalhes do produto"
			style={{ width: "47%", marginTop: 24 }}
		>
			<Product
				{...props}
				direction="column"
				image={{ width: "100%", height: 180 }}
			>
				<AddToCartButton.Quick
					accessibilityLabel="Adicionar ao carrinho"
					onPress={() => handleAddProductToCart()}
				/>
			</Product>
		</Link>
	);
};

export const CommonProducts = ({ products, ...props }: CommonProductsProps) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<ProductData>) => <CommonProduct {...item} />,
		[]
	);

	const keyExtractor = useCallback(({ id }: ProductData) => id, []);

	return (
		<FlatList
			{...props}
			data={products}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
		/>
	);
};

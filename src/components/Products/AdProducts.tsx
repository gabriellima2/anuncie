import React, { useCallback } from "react";
import {
	FlatList,
	Image,
	ListRenderItemInfo,
	TouchableOpacity,
	View,
} from "react-native";

import type { AdProductData, FlatListProduct } from "../../types";

import { Info, Name, Price } from "./styles";

interface AdProductsProps extends FlatListProduct<AdProductData> {
	products: AdProductData[];
}

export const AdProduct = (props: AdProductData) => {
	return (
		<View>
			<Image
				source={props.sourceImage}
				resizeMode="center"
				accessibilityLabel={`Imagem de ${props.name}`}
				style={{ width: 100, height: 100 }}
			/>

			<Info>
				<View>
					<Name numberOfLines={2}>{props.name}</Name>
					<Price>{props.price}</Price>
				</View>

				<TouchableOpacity>Editar</TouchableOpacity>
				<TouchableOpacity>Remover</TouchableOpacity>
			</Info>
		</View>
	);
};

export const AdProducts = ({ products, ...props }: AdProductsProps) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<AdProductData>) => <AdProduct {...item} />,
		[]
	);

	const keyExtractor = useCallback(({ id }: AdProductData) => id, []);

	return (
		<FlatList
			{...props}
			data={products}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
		/>
	);
};

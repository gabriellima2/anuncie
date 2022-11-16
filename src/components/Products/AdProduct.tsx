import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { Text } from "@components/Text";

import type { AdProductData } from "../../types";

import { Info, Name, Price } from "./styles";

export const AdProduct = (props: AdProductData) => {
	return (
		<View>
			<Image
				source={{ uri: props.sourceImage as string }}
				resizeMode="center"
				accessibilityLabel={`Imagem de ${props.name}`}
				style={{ width: 100, height: 100 }}
			/>

			<Info>
				<View>
					<Name numberOfLines={2}>{props.name}</Name>
					<Price>{props.price}</Price>
				</View>

				<TouchableOpacity>
					<Text.LightPrimary>Editar</Text.LightPrimary>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text.LightPrimary>Remover</Text.LightPrimary>
				</TouchableOpacity>
			</Info>
		</View>
	);
};

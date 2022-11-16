import React from "react";
import { Image, ViewProps, View } from "react-native";

import type { ProductData } from "../../types";

import {
	Info,
	Name,
	Price,
	Additional,
	UserInteractions,
	Container,
	VariantStyles,
} from "./styles";

type DataProps = Pick<ProductData, "name" | "sourceImage" | "price">;

export interface ProductBaseProps extends DataProps, ViewProps, VariantStyles {
	additionalText?: string;
	image: {
		width: string | number;
		height: string | number;
	};
}

export const ProductBase = ({
	name,
	price,
	sourceImage,
	children,
	image,
	additionalText,
	...props
}: ProductBaseProps) => {
	return (
		<Container {...props}>
			<Image
				source={
					typeof sourceImage === "string" ? { uri: sourceImage } : sourceImage
				}
				resizeMode="center"
				accessibilityLabel={`Imagem de ${name}`}
				style={{ width: image.width, height: image.height }}
			/>

			<Info direction={props.direction}>
				<View>
					<Name numberOfLines={2}>{name}</Name>
					{additionalText && <Additional>{additionalText}</Additional>}
					<Price>R$ {price}</Price>
				</View>

				<UserInteractions>{children}</UserInteractions>
			</Info>
		</Container>
	);
};

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

export interface ProductProps extends DataProps, ViewProps, VariantStyles {
	additionalText?: string;
	image: {
		width: string | number;
		height: string | number;
	};
}

export const Product = ({
	name,
	price,
	sourceImage,
	children,
	image,
	additionalText,
	...props
}: ProductProps) => {
	return (
		<Container {...props}>
			<Image
				source={sourceImage}
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

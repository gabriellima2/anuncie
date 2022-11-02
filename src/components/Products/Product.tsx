import React from "react";
import { Image, ViewProps, View } from "react-native";

import type { ProductData } from "../../types";

import { Info, Name, Price } from "./styles";

type DataProps = Pick<ProductData, "name" | "images" | "price">;

export interface ProductProps extends DataProps, ViewProps {
	image: {
		width: string | number;
		height: string | number;
	};
}

export const Product = ({
	name,
	price,
	images,
	children,
	image,
	...props
}: ProductProps) => {
	return (
		<View {...props}>
			<Image
				source={images.main}
				resizeMode="center"
				accessibilityLabel={`Imagem de ${name}`}
				style={{ width: image.width, height: image.height }}
			/>

			<Info>
				<View>
					<Name numberOfLines={2}>{name}</Name>
					<Price>{price}</Price>
				</View>

				{children}
			</Info>
		</View>
	);
};

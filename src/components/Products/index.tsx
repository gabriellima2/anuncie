import { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { AddButton } from "../Buttons/AddButton";

import type { ProductData } from "../../types";

import { Info, Name, Price, ProductImage, Texts } from "./styles";
import { Link } from "../Link";
import { useReactNavigation } from "../../hooks/useReactNavigation";

interface ProductsProps {
	products: ProductData[];
}

const Product = (props: ProductData) => {
	const navigation = useReactNavigation();

	return (
		<Link onPress={() => navigation.navigate("Details", { id: props.id })}>
			<ProductImage
				source={props.images.main}
				style={{ width: 130, height: 130 }}
				resizeMode="contain"
			/>
			<Info>
				<Texts>
					<Name>{props.name}</Name>
					<Price>{props.price}</Price>
				</Texts>

				<AddButton onPress={() => console.log("Adicionando ao carrinho...")} />
			</Info>
		</Link>
	);
};

export const Products = ({ products }: ProductsProps) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<ProductData>) => <Product {...item} />,
		[]
	);

	const keyExtractor = useCallback(({ id }: ProductData) => id, []);

	return (
		<FlatList
			numColumns={2}
			data={products}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
		/>
	);
};

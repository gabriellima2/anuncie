import { useCallback } from "react";
import { FlatList, Image, ListRenderItemInfo, View } from "react-native";

import { useReactNavigation } from "../../hooks/useReactNavigation";

import { AddButton } from "../Buttons/AddButton";
import { Link } from "../Link";

import type { ProductData } from "../../types";

import { Info, Name, Price } from "./styles";
import { SearchBar } from "../SearchBar";

interface ProductsProps {
	products: ProductData[];
}

const Product = (props: ProductData) => {
	const navigation = useReactNavigation();

	return (
		<Link
			onPress={() => navigation.navigate("Details", { id: props.id })}
			style={{ width: "47%", marginTop: 24 }}
			accessibilityLabel="Ver mais detalhes do produto"
			accessibilityHint="Vai para a página de detalhes do produto"
		>
			<Image
				source={props.images.main}
				style={{ width: "100%", height: 180 }}
				accessibilityLabel={`Imagem de ${props.name}`}
				resizeMode="center"
			/>
			<Info>
				<View style={{ width: 100 }}>
					<Name>{props.name}</Name>
					<Price>{props.price}</Price>
				</View>

				<AddButton
					accessibilityLabel="Adicionar ao carrinho"
					onPress={() => console.log("Adicionando ao carrinho...")}
				/>
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
			style={{ marginTop: 8 }}
			columnWrapperStyle={{ justifyContent: "space-between" }}
			contentContainerStyle={{ paddingBottom: 84, paddingHorizontal: 12 }}
			data={products}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			ListHeaderComponent={() => (
				<SearchBar handleSearch={(value) => console.log(value)} />
			)}
		/>
	);
};

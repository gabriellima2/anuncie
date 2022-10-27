import { Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { QuantityButton } from "../../components/Buttons/QuantityButton";
import { MainButton } from "../../components/Buttons/MainButton";

import { AppLayout } from "../../layouts/AppLayout";

import type { RootStackParams } from "../../types";
import { getSpecificProduct } from "../../utils/getSpecificProduct";

import {
	Container,
	Content,
	Description,
	Name,
	AvailableQuantity,
	Price,
} from "./styles";

interface DetailsScreenProps
	extends NativeStackScreenProps<RootStackParams, "Details"> {}

export const DetailsScreen = (props: DetailsScreenProps) => {
	const id = props.route.params.id;
	const product = getSpecificProduct(id);

	return (
		<AppLayout>
			<Image
				source={product.images.main}
				accessibilityLabel={`Imagem do produto ${product.name}`}
				style={{ width: "100%", height: "45%" }}
			/>
			<Container>
				<Content>
					<Name>{product.name}</Name>
					<Description>{product.description}</Description>
					<AvailableQuantity>
						{product.availableQuantity} Unidades Disponíveis
					</AvailableQuantity>
					<Price>R$ {product.price}</Price>
				</Content>

				<QuantityButton maxQuantity={product.availableQuantity} />
				<MainButton
					style={{ marginTop: 12 }}
					accessibilityLabel="Adiciona o produto no carrinho"
				>
					Adicionar ao carrinho
				</MainButton>
			</Container>
		</AppLayout>
	);
};

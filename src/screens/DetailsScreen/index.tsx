import { useRef } from "react";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { addProduct } from "@redux/slices/cart.slice";

import {
	QuantityButton,
	QuantityButtonRef,
} from "@components/Buttons/QuantityButton";
import { AddToCartButton } from "@components/Buttons/AddToCartButton";

import { AppLayout } from "@layouts/AppLayout";

import type { RootStackParams } from "../../types";

import {
	Container,
	Content,
	Description,
	Name,
	AvailableQuantity,
	Price,
	Buttons,
} from "./styles";
import { getSpecificProduct } from "@utils/getSpecificProduct";

interface DetailsScreenProps
	extends NativeStackScreenProps<RootStackParams, "Details"> {}

export const DetailsScreen = (props: DetailsScreenProps) => {
	const quantityRef = useRef<QuantityButtonRef>(null);
	const dispatch = useDispatch();

	const id = props.route.params.id;
	const product = getSpecificProduct(id);

	const handleAddProductToCart = () => {
		if (!quantityRef.current) return;

		const quantity = quantityRef.current.currentQuantity;
		dispatch(addProduct({ id, quantity }));
	};

	return (
		<AppLayout>
			<Image
				source={product.sourceImage}
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

				<Buttons>
					<QuantityButton
						ref={quantityRef}
						maxQuantity={product.availableQuantity}
					/>
					<AddToCartButton
						variants="main"
						onPress={handleAddProductToCart}
						style={{ marginTop: 16 }}
					>
						Adicionar ao carrinho
					</AddToCartButton>
				</Buttons>
			</Container>
		</AppLayout>
	);
};

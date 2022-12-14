import { useRef } from "react";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { addProduct } from "@redux/slices/cart.slice";
import { useAdSelect } from "@redux/slices/ad.slice";

import {
	QuantityButton,
	QuantityButtonRef,
} from "@components/Buttons/QuantityButton";
import { AddToCartButton } from "@components/Buttons/AddToCartButton";
import { Error } from "@components/Error";

import { AppLayout } from "@layouts/AppLayout";

import { getProduct } from "@utils/getProduct";
import { products as productsMock } from "@mocks/products";
import { isSingularText } from "@utils/isSingularText";

import type { TStackParams } from "@globalTypes/TStack";

import {
	Container,
	Content,
	Description,
	Name,
	Complementary,
	Price,
	Buttons,
} from "./styles";

interface DetailsScreenProps
	extends NativeStackScreenProps<TStackParams, "Details"> {}

export const DetailsScreen = (props: DetailsScreenProps) => {
	const quantityRef = useRef<QuantityButtonRef>(null);
	const { products: productsAD } = useAdSelect();
	const dispatch = useDispatch();

	const id = props.route.params.id;
	const product = getProduct.byId([...productsAD, ...productsMock], id);

	const handleAddProductToCart = () => {
		if (!quantityRef.current) return;

		const quantity = quantityRef.current.currentQuantity;
		dispatch(addProduct({ id, quantity }));
	};

	if (!product) {
		return <Error message="Produto não encontrado" />;
	}

	return (
		<AppLayout>
			<Image
				source={{ uri: product.sourceImage }}
				accessibilityLabel={`Imagem do produto ${product.name}`}
				resizeMode="contain"
				style={{ width: "100%", height: "45%", backgroundColor: "#fff" }}
			/>
			<Container>
				<Content>
					<Name>{product.name}</Name>
					<Description>{product.description || "Sem informações"}</Description>
					<Complementary>
						{product.availableQuantity}{" "}
						{isSingularText(product.availableQuantity)
							? "Unidade disponível"
							: "Unidades disponíveis"}
					</Complementary>
					<Complementary>Vendido por {product.soldBy}</Complementary>
					<Price>R$ {product.price}</Price>
				</Content>

				<Buttons>
					<QuantityButton
						ref={quantityRef}
						maxQuantity={product.availableQuantity}
					/>
					<AddToCartButton
						disabled={product.soldBy === "Gabriel"}
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

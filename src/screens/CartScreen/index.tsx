import { View } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useCartSelect } from "@redux/slices/cart.slice";

import { CartProduct } from "@components/Products/CartProduct";
import { MainButton } from "@components/Buttons/MainButton";
import { ProductList } from "@components/ProductList";
import { Error } from "@components/Error";

import { AppLayout } from "@layouts/AppLayout";
import { isSingularText } from "@utils/isSingularText";

import {
	Container,
	Checkout,
	LeftText,
	RightText,
	Summary,
	TextContainer,
	Total,
} from "./styles";

export const CartScreen = () => {
	const { products, isEmpty, total } = useCartSelect();
	const tabBarHeight = useBottomTabBarHeight();

	if (isEmpty) return <Error message="Carrinho vazio" />;

	const totalQuantity = products.length;

	return (
		<AppLayout addHorizontalSpacing={false}>
			<ProductList products={products} ProductItem={CartProduct} />
			<Container>
				<Checkout bottomPosition={tabBarHeight}>
					<View>
						<Summary>
							<TextContainer>
								<LeftText>Subtotal</LeftText>
								<RightText>R${total}</RightText>
							</TextContainer>
							<TextContainer>
								<LeftText>Quantidade Total</LeftText>
								<RightText>
									{totalQuantity}{" "}
									{isSingularText(totalQuantity) ? "Item" : "Itens"}
								</RightText>
							</TextContainer>
						</Summary>
						<TextContainer>
							<Total>Total</Total>
							<Total>R${total}</Total>
						</TextContainer>
					</View>
					<MainButton>Comprar</MainButton>
				</Checkout>
			</Container>
		</AppLayout>
	);
};

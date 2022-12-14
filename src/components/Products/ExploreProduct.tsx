import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useReactNavigation } from "@hooks/useReactNavigation";
import { addProduct } from "@redux/slices/cart.slice";

import { AddToCartButton } from "@components/Buttons/AddToCartButton";
import { Link } from "@components/Links/Link";
import { ProductBase } from "./ProductBase";
import { Icon } from "@components/Icon";

import type { IProduct } from "@interfaces/IProduct";

interface ExploreProductProps
	extends Omit<IProduct, "availableQuantity" | "description"> {}

export const ExploreProduct = (props: ExploreProductProps) => {
	const dispatch = useDispatch();
	const navigation = useReactNavigation();

	const handleAddProductToCart = useCallback(() => {
		dispatch(addProduct({ id: props.id, quantity: 1 }));
	}, []);

	return (
		<Link
			onPress={() => navigation.navigate("Details", { id: props.id })}
			accessibilityLabel="Ver mais detalhes do produto"
			accessibilityHint="Vai para a página de detalhes do produto"
			style={{ width: "47%" }}
		>
			<ProductBase
				{...props}
				direction="column"
				image={{ width: "100%", height: 180 }}
			>
				<AddToCartButton
					disabled={props.soldBy === "Gabriel"}
					variants="quick"
					onPress={() => handleAddProductToCart()}
				>
					<Icon name="cart" size={18} color="#f1f1f1" />
				</AddToCartButton>
			</ProductBase>
		</Link>
	);
};

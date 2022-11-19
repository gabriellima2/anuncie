import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { changeProductQuantity, removeProduct } from "@redux/slices/cart.slice";

import { QuantityButton } from "@components/Buttons/QuantityButton";
import { RemoveButton } from "@components/Buttons/RemoveButton";
import { ProductBase } from "./ProductBase";

import { isSingularText } from "@utils/isSingularText";
import type { ICartProduct } from "@interfaces/IProduct";

export const CartProduct = (props: ICartProduct) => {
	const dispatch = useDispatch();

	const handleQuantityChange = (newQuantity: number) =>
		dispatch(changeProductQuantity({ id: props.id, quantity: newQuantity }));

	const handleRemove = useCallback(() => {
		dispatch(removeProduct({ id: props.id }));
	}, []);

	return (
		<ProductBase
			{...props}
			direction="row"
			image={{ width: 100, height: 100 }}
			additionalText={`${props.availableQuantity} ${
				isSingularText(props.availableQuantity)
					? "Unidade disponível"
					: "Unidades disponíveis"
			}`}
		>
			<RemoveButton
				onPress={handleRemove}
				accessibilityLabel="Remover produto"
				style={{ marginBottom: 24 }}
			/>
			<QuantityButton
				initialQuantity={props.quantity}
				maxQuantity={props.availableQuantity}
				handleQuantityChange={handleQuantityChange}
			/>
		</ProductBase>
	);
};

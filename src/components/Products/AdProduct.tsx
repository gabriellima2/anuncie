import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

import { editAdProduct, removeAdProduct } from "@redux/slices/ad.slice";

import { RemoveButton } from "@components/Buttons/RemoveButton";
import { EditButton } from "@components/Buttons/EditButton";
import { ProductBase } from "./ProductBase";

import type { AdProductData } from "../../types";

export const AdProduct = (props: AdProductData) => {
	const dispatch = useDispatch();

	const handleEditPress = () => dispatch(editAdProduct({ id: props.id }));

	const handleRemovePress = () => dispatch(removeAdProduct({ id: props.id }));

	return (
		<ProductBase
			{...props}
			direction="row"
			image={{ width: 100, height: 100 }}
			additionalText={"0 Unidades vendidas"}
		>
			<View>
				<EditButton onPress={handleEditPress} style={{ marginBottom: 12 }} />
				<RemoveButton onPress={handleRemovePress} />
			</View>
		</ProductBase>
	);
};

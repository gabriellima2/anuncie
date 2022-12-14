import React, { useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

import { useReactNavigation } from "@hooks/useReactNavigation";

import { removeAdProduct } from "@redux/slices/ad.slice";

import { RemoveButton } from "@components/Buttons/RemoveButton";
import { EditButton } from "@components/Buttons/EditButton";
import { ProductBase } from "./ProductBase";

import type { IAdProduct } from "@interfaces/IProduct";

export const AdProduct = (props: IAdProduct) => {
	const navigation = useReactNavigation();
	const dispatch = useDispatch();

	const handleEditPress = useCallback(() => {
		navigation.navigate("AdEdit", { id: props.id });
	}, []);

	const handleRemovePress = useCallback(() => {
		dispatch(removeAdProduct({ id: props.id }));
	}, []);

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

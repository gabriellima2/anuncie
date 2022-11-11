import { useDispatch } from "react-redux";
import type { GestureResponderEvent } from "react-native";

import { showToast } from "../../redux/slices/toast.slice";

import { MainButton } from "./MainButton";
import { Button } from "./Button";

import type { ButtonDefaultProps } from "../../types";

interface Props extends Omit<ButtonDefaultProps, "accessibilityLabel"> {
	variants: "quick" | "main";
}

export const AddToCartButton = ({ variants, ...props }: Props) => {
	const dispatch = useDispatch();

	const isQuickButton = variants === "quick";
	const BaseButton = isQuickButton ? Button : MainButton;

	const handlePress = (e: GestureResponderEvent) => {
		if (!props.onPress) return;

		props.onPress(e);
		dispatch(
			showToast({
				type: "success",
				iconName: "cart",
				message: "Produto adicionado ao carrinho",
			})
		);
	};

	return (
		<BaseButton
			{...props}
			size={isQuickButton ? "small" : "default"}
			accessibilityLabel="Adiciona o produto ao carrinho"
			onPress={handlePress}
		>
			{props.children}
		</BaseButton>
	);
};

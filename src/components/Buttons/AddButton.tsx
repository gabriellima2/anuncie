import { useDispatch } from "react-redux";

import { showToast } from "../../redux/slices/toast.slice";

import { Icon } from "../Icon";
import { Button } from "./Button";

import type { ButtonDefaultProps } from "../../types";

interface AddButtonProps extends Omit<ButtonDefaultProps, "onPress"> {
	handleAdd: () => void;
}

export const AddButton = ({ handleAdd, ...props }: AddButtonProps) => {
	const dispatch = useDispatch();

	const handlePress = () => {
		handleAdd();
		dispatch(
			showToast({
				type: "success",
				message: "Adicionado ao carrinho",
				iconName: "checkmark-outline",
				time: 2000,
			})
		);
	};

	return (
		<Button {...props} onPress={handlePress} size="small">
			<Icon name="cart" size={18} color="#f1f1f1" />
		</Button>
	);
};

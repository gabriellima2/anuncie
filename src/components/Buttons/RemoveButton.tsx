import { useDispatch } from "react-redux";

import { Icon } from "../Icon";
import { Button } from "./Button";

import type { ButtonDefaultProps } from "../../types";
import { removeProduct } from "../../redux/slices/myProducts.slice";

export interface RemoveButtonProps extends ButtonDefaultProps {
	productID: string;
}

export const RemoveButton = ({ productID, ...props }: RemoveButtonProps) => {
	const dispatch = useDispatch();

	const handlePress = () => {
		dispatch(removeProduct({ id: productID }));
	};

	return (
		<Button
			{...props}
			onPress={handlePress}
			style={{ backgroundColor: "#DD4545" }}
			size="small"
			accessibilityLabel="Remover produto"
		>
			<Icon name="trash" size={18} color="#f1f1f1" />
		</Button>
	);
};

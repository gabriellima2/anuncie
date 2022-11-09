import { MainButton } from "./MainButton";
import { Button } from "./Button";
import { Icon } from "../Icon";

import type { ButtonDefaultProps } from "../../types";

interface Props extends Omit<ButtonDefaultProps, "accessibilityLabel"> {}

const Quick = (props: Props) => (
	<Button
		{...props}
		size="small"
		accessibilityLabel="Adiciona o produto ao carrinho"
	>
		<Icon name="cart" size={18} color="#f1f1f1" />
	</Button>
);

const Main = (props: Props) => (
	<MainButton
		{...props}
		style={[props.style, { marginTop: 16 }]}
		accessibilityLabel="Adiciona o produto ao carrinho"
	>
		Adicionar ao carrinho
	</MainButton>
);

export const AddToCartButton = { Quick, Main };

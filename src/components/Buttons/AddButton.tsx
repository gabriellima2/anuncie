import { Icon } from "../Icon";
import { Button } from "./Button";

import type { ButtonDefaultProps } from "../../types";

interface AddButtonProps extends ButtonDefaultProps {}

export const AddButton = (props: AddButtonProps) => (
	<Button {...props} size="small">
		<Icon name="cart" size={18} color="#f1f1f1" />
	</Button>
);

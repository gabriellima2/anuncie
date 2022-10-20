import { Icon } from "../Icon";
import { Button } from "./Button";

import type { ButtonDefaultProps } from "../../types";

interface AddButtonProps extends ButtonDefaultProps {}

export const AddButton = (props: AddButtonProps) => {
	return (
		<Button {...props} size="small">
			<Icon name="add" size={18} color={"#f1f1f1"} />
		</Button>
	);
};

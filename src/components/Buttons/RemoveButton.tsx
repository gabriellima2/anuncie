import { Icon } from "../Icon";
import { Button } from "./Button";

import type { ButtonDefaultProps } from "../../types";

export interface RemoveButtonProps extends ButtonDefaultProps {}

export const RemoveButton = (props: RemoveButtonProps) => {
	return (
		<Button
			{...props}
			style={[props.style, { backgroundColor: "#DD4545" }]}
			size="small"
		>
			<Icon name="trash" size={18} color="#f1f1f1" />
		</Button>
	);
};

import { Icon } from "@components/Icon";
import { Button } from "./Button";

import type { ButtonDefaultProps } from "src/types";

export const EditButton = (props: ButtonDefaultProps) => (
	<Button
		{...props}
		style={[props.style, { backgroundColor: "transparent" }]}
		size="small"
	>
		<Icon name="create-outline" size={18} color="#f1f1f1" />
	</Button>
);

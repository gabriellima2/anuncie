import type { TouchableOpacityProps } from "react-native";

import { Icon } from "@components/Icon";
import { Button } from "./Button";

export const EditButton = (props: TouchableOpacityProps) => (
	<Button
		{...props}
		style={[props.style, { backgroundColor: "transparent" }]}
		size="small"
	>
		<Icon name="create-outline" size={18} color="#f1f1f1" />
	</Button>
);

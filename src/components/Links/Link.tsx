import { Button } from "@components/Buttons/Button";
import { TouchableOpacity } from "react-native";

import type { ButtonDefaultProps } from "../../types";

export interface LinkProps
	extends Omit<ButtonDefaultProps, "activeOpacity" | "accessibilityRole"> {
	variants?: "default" | "background";
}

export const Link = ({ variants, ...props }: LinkProps) => {
	const Component = variants === "background" ? Button : TouchableOpacity;

	return (
		<Component {...props} activeOpacity={0.6} accessibilityRole="link">
			{props.children}
		</Component>
	);
};

const defaultProps: Pick<LinkProps, "variants"> = {
	variants: "default",
};

Link.defaultProps = defaultProps;

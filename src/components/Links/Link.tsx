import { Button } from "@components/Buttons/Button";
import { TouchableOpacity } from "react-native";

import type { ButtonDefaultProps } from "../../types";

export interface LinkProps
	extends Omit<ButtonDefaultProps, "activeOpacity" | "accessibilityRole"> {
	variants?: "default" | "background";
}

export const Link = ({ variants, ...props }: LinkProps) => {
	if (variants === "background") {
		return (
			<Button {...props} activeOpacity={0.6} accessibilityRole="link">
				{props.children}
			</Button>
		);
	}

	return (
		<TouchableOpacity {...props} activeOpacity={0.6} accessibilityRole="link" />
	);
};

const defaultProps: Pick<LinkProps, "variants"> = {
	variants: "default",
};

Link.defaultProps = defaultProps;

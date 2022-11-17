import { Button, ButtonProps } from "@components/Buttons/Button";
import { TouchableOpacity } from "react-native";

export interface LinkProps
	extends Omit<ButtonProps, "activeOpacity" | "accessibilityRole"> {
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

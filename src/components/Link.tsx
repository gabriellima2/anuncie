import { TouchableOpacity } from "react-native";

import type { ButtonDefaultProps } from "../types";

interface LinkProps extends ButtonDefaultProps {}

export const Link = (props: LinkProps) => (
	<TouchableOpacity {...props} activeOpacity={0.6} accessibilityRole="link" />
);

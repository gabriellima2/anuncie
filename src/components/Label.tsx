import { TextProps } from "react-native";
import { Text } from "./Text";

export const Label = (props: TextProps) => (
	<Text.MediumPrimary {...props} style={[props.style, { marginBottom: 10 }]} />
);

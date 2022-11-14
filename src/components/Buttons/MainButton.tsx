import { Button, ButtonProps } from "./Button";

export const MainButton = ({ style, ...props }: Omit<ButtonProps, "size">) => (
	<Button {...props} style={[style, { width: "100%", height: 55 }]} />
);

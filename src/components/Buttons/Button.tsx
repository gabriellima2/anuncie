/* eslint-disable indent */
import type { ReactNode } from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps, ButtonStyle {
	children: ReactNode;
}

interface ButtonStyle extends Pick<ButtonProps, "disabled"> {
	size: "small" | "default";
}

const ButtonStyle = styled.TouchableOpacity<ButtonStyle>`
	${({ theme, size, disabled }) => css`
		align-items: center;
		justify-content: center;

		padding: ${size === "default" ? theme.spaces[3] : theme.spaces[1]};
		border-radius: ${size === "default" ? 8 : 4}px;

		background-color: ${disabled
			? theme.colors.utils.secondary
			: theme.colors.main};
	`}
`;

const ButtonText = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.mainMedium};
		font-size: 18px;
		color: #f1f1f1;
	`}
`;

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<ButtonStyle {...props} activeOpacity={0.5}>
			<ButtonText>{children}</ButtonText>
		</ButtonStyle>
	);
};

const defaultProps: Pick<ButtonProps, "size"> = {
	size: "default",
};

Button.defaultProps = defaultProps;

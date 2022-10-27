import type { ReactNode } from "react";
import styled, { css } from "styled-components/native";

import type { ButtonDefaultProps } from "../../types";

interface ButtonStyle {
	size: "small" | "default";
	isDisabled?: boolean;
}

export interface ButtonProps extends ButtonDefaultProps, ButtonStyle {
	children: ReactNode;
}

const ButtonStyle = styled.TouchableOpacity<ButtonStyle>`
	${({ theme, size, isDisabled }) => css`
		align-items: center;
		justify-content: center;

		padding: ${size === "default" ? theme.spaces[3] : theme.spaces[1]};
		border-radius: ${size === "default" ? 8 : 4}px;

		background-color: ${isDisabled
			? theme.colors.utils.secondary
			: theme.colors.main};
	`}
`;

const ButtonText = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.mainMedium};
		font-size: ${theme.fontSizes[5]};
		color: #f1f1f1;
	`}
`;

export const Button = ({ children, isDisabled, ...props }: ButtonProps) => {
	return (
		<ButtonStyle {...props} disabled={isDisabled} activeOpacity={0.5}>
			<ButtonText>{children}</ButtonText>
		</ButtonStyle>
	);
};

const defaultProps: Pick<ButtonProps, "size"> = {
	size: "default",
};

Button.defaultProps = defaultProps;

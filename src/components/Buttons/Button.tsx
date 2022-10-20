import type { ReactNode } from "react";
import styled, { css } from "styled-components/native";

import type { ButtonDefaultProps } from "../../types";

interface ButtonStyle {
	size: "small" | "default";
}

interface ButtonProps extends ButtonDefaultProps, ButtonStyle {
	children: ReactNode;
}

const ButtonStyle = styled.TouchableOpacity<ButtonStyle>`
	${({ theme, size }) => css`
		align-items: center;
		justify-content: center;

		padding: ${size === "default" ? theme.spaces[3] : theme.spaces[1]};
		border-radius: ${size === "default" ? 8 : 4}px;

		background-color: ${theme.colors.main};
	`}
`;

const ButtonText = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.mainMedium};
		font-size: ${theme.fontSizes[4]};
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

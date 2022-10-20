import type { ReactNode } from "react";
import styled, { css } from "styled-components/native";

import type { ButtonDefaultProps } from "../../types";

interface ButtonProps extends ButtonDefaultProps {
	children: ReactNode;
}

const ButtonStyle = styled.TouchableOpacity`
	${({ theme }) => css`
		align-items: center;
		justify-content: center;

		padding: ${theme.spaces[3]};
		border-radius: 8px;

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

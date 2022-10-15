import styled, { css } from "styled-components/native";

export const Input = styled.TextInput`
	${({ theme }) => css`
		flex: 1;

		padding: ${theme.spaces[1]} ${theme.spaces[3]};
		border-radius: 8px;

		font-family: ${theme.fonts.mainRegular};
		color: ${theme.colors.fonts.primary};
		font-size: ${theme.fontSizes[4]};

		background-color: ${theme.colors.utils.primary};
	`}
`;

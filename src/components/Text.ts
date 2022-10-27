import styled, { css } from "styled-components/native";

const Primary = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.fonts.primary};
		font-family: ${theme.fonts.mainRegular};
	`}
`;

const Secondary = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.fonts.secondary};
		font-family: ${theme.fonts.mainRegular};
	`}
`;

export const Text = { Primary, Secondary };

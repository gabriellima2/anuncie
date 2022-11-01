import styled, { css } from "styled-components/native";

const LightPrimary = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.fonts.primary};
		font-family: ${theme.fonts.mainLight};
	`}
`;

const LightSecondary = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.fonts.secondary};
		font-family: ${theme.fonts.mainLight};
	`}
`;

const RegularPrimary = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.fonts.primary};
		font-family: ${theme.fonts.mainRegular};
	`}
`;

const RegularSecondary = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.fonts.secondary};
		font-family: ${theme.fonts.mainRegular};
	`}
`;

const MediumPrimary = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.fonts.primary};
		font-family: ${theme.fonts.mainMedium};
	`}
`;

const MediumSecondary = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.fonts.secondary};
		font-family: ${theme.fonts.mainMedium};
	`}
`;

export const Text = {
	LightPrimary,
	LightSecondary,
	RegularPrimary,
	RegularSecondary,
	MediumPrimary,
	MediumSecondary,
};

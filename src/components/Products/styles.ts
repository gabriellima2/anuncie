import styled, { css } from "styled-components/native";
import { Text } from "@components/Text";

export interface VariantStyles {
	direction: "row" | "column";
}

export const Container = styled.View<VariantStyles>`
	${({ theme, direction }) => css`
		flex-direction: ${direction};
		align-items: ${direction === "row" ? "center" : "flex-start"};
		margin-bottom: ${theme.spaces[3]};
	`}
`;

export const Info = styled.View<VariantStyles>`
	${({ theme, direction }) => css`
		width: 100%;

		flex: 1;
		justify-content: space-between;
		align-items: flex-end;
		flex-direction: row;

		padding: ${theme.spaces[3]} 0px;
		margin-left: ${direction === "row" ? theme.spaces[4] : 0};
	`}
`;

export const Name = styled(Text.MediumPrimary)`
	${({ theme }) => css`
		max-width: 150px;

		font-size: ${theme.fontSizes[5]};
	`}
`;

export const Price = styled(Text.RegularPrimary)`
	${({ theme }) => css`
		font-family: ${theme.fonts.mainBold};
		font-size: ${theme.fontSizes[5]};

		margin: ${theme.spaces[4]} 0px 0px 0px;
	`}
`;

export const UserInteractions = styled.View`
	max-width: 80px;
	height: auto;
`;

export const Additional = styled(Text.LightSecondary)`
	${({ theme }) => css`
		font-size: 14px;

		margin: ${theme.spaces[2]} 0px 0px 0px;
	`}
`;

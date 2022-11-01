import styled, { css } from "styled-components/native";
import { Text } from "../../components/Text";

export const Container = styled.View`
	${({ theme }) => css`
		flex: 1;
		align-items: center;
		justify-content: space-between;
		padding: ${theme.spaces[3]};
	`}
`;

export const Content = styled.View`
	width: 100%;
`;

export const Name = styled(Text.MediumPrimary)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[6]};
		margin-top: ${theme.spaces[4]};
	`}
`;

export const Description = styled(Text.RegularPrimary)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[4]};
		line-height: 18px;
		margin: ${theme.spaces[3]} 0px;
	`}
`;

export const AvailableQuantity = styled(Text.LightSecondary)``;

export const Price = styled(Text.MediumPrimary)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[7]};

		margin: ${theme.spaces[3]} 0px;
	`}
`;

export const Buttons = styled.View`
	width: 100%;
	align-items: center;
`;

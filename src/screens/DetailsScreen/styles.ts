import styled, { css } from "styled-components/native";
import { Text } from "../../components/Text";

export const Container = styled.View`
	${({ theme }) => css`
		align-items: center;
		padding: ${theme.spaces[3]};
	`}
`;

export const Content = styled.View`
	width: 100%;
`;

export const Name = styled(Text.Primary)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[6]};
	`}
`;

export const Description = styled(Text.Primary)`
	${({ theme }) => css`
		margin: ${theme.spaces[1]} 0px;
	`}
`;

export const AvailableQuantity = styled(Text.Secondary)``;

export const Price = styled(Text.Primary)`
	${({ theme }) => css`
		font-family: ${theme.fonts.mainBold};
		font-size: ${theme.fontSizes[6]};

		margin: ${theme.spaces[4]} 0px;
	`}
`;

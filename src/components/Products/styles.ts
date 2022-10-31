import styled, { css } from "styled-components/native";
import { Text } from "../Text";

export const Info = styled.View`
	${({ theme }) => css`
		justify-content: space-between;
		align-items: flex-end;
		flex-direction: row;
		flex-wrap: wrap;

		padding: ${theme.spaces[3]} 0px;
	`}
`;

export const Name = styled(Text.Primary)`
	${({ theme }) => css`
		width: 100%;

		font-family: ${theme.fonts.mainLight};
		font-size: ${theme.fontSizes[4]};
	`}
`;

export const Price = styled(Text.Primary)`
	${({ theme }) => css`
		font-family: ${theme.fonts.mainBold};
		font-size: ${theme.fontSizes[4]};

		margin-top: ${theme.spaces[3]};
	`}
`;

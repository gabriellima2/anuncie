import styled, { css } from "styled-components/native";

export const Info = styled.View`
	${({ theme }) => css`
		justify-content: space-between;
		align-items: flex-end;
		flex-direction: row;
		flex-wrap: wrap;

		padding: ${theme.spaces[3]} 0px;
	`}
`;

export const Name = styled.Text`
	${({ theme }) => css`
		width: 100%;
		height: 35px;

		font-family: ${theme.fonts.mainLight};
		font-size: ${theme.fontSizes[4]};
	`}
`;

export const Price = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.mainBold};
		font-size: ${theme.fontSizes[4]};

		margin-top: ${theme.spaces[2]};
	`}
`;

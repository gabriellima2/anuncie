import styled, { css } from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	align-items: center;
`;

export const Content = styled.View`
	${({ theme }) => css`
		width: 100%;
		align-items: center;
		padding-bottom: ${theme.spaces[9]};
	`}
	width: 100%;
	align-items: center;
`;

export const Links = styled.View`
	${({ theme }) => css`
		width: 100%;
		padding: 0px ${theme.spaces[3]};
		margin: ${theme.spaces[9]} 0px;
	`}
`;

import { Text } from "@components/Text";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
	${({ theme }) => css`
		margin-bottom: ${theme.spaces[4]};
	`}
`;

export const Error = styled(Text.RegularPrimary)`
	${({ theme }) => css`
		font-size: 13px;
		color: ${theme.colors.error};
		margin-top: ${theme.spaces[2]};
	`}
`;

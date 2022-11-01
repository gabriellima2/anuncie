import styled, { css } from "styled-components/native";

import { Link } from "../Link";
import { Text } from "../Text";

export const Container = styled(Link)`
	${({ theme }) => css`
		flex-direction: row;
		justify-content: space-between;

		padding: ${theme.spaces[6]} ${theme.spaces[4]};
		margin-top: ${theme.spaces[4]};
		border-radius: ${theme.spaces[4]};

		background-color: ${theme.colors.utils.primary};
	`}
`;

export const Content = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Value = styled(Text.RegularPrimary)`
	${({ theme }) => css`
		text-transform: capitalize;
		font-family: ${theme.fonts.mainMedium};
		font-size: ${theme.fontSizes[4]};

		margin-left: ${theme.spaces[4]};
	`}
`;

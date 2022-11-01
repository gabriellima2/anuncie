import styled, { css } from "styled-components/native";
import { Text } from "../../Text";

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const QuantityText = styled(Text.RegularPrimary)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[4]};
		padding: 0px ${theme.spaces[2]};
	`}
`;

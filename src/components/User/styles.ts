import styled, { css } from "styled-components/native";
import { Text } from "@components/Text";

export const Container = styled.View`
	align-items: center;
`;

export const FakeImage = styled.View`
	${({ theme }) => css`
		padding: 44px;
		border-radius: 1000px;
		background-color: ${theme.colors.utils.secondary};
	`}
`;

export const Name = styled(Text.MediumPrimary)`
	${({ theme }) => css`
		font-family: ${theme.fonts.mainMedium};
		font-size: ${theme.fontSizes[4]};
		margin-top: ${theme.spaces[4]};
	`}
`;

import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

import { Text } from "@components/Text";

const { width } = Dimensions.get("window");

interface CheckoutStyles {
	bottomPosition: number;
}

export const Container = styled.View`
	align-items: center;
`;

export const Checkout = styled.View<CheckoutStyles>`
	${({ theme, bottomPosition }) => css`
		width: ${width}px;
		background-color: ${theme.colors.utils.primary};

		margin-top: 32px;
		padding: ${theme.spaces[6]} ${theme.spaces[4]};

		border-top-right-radius: 24px;
		border-top-left-radius: 24px;

		transform: translateY(-${Math.abs(bottomPosition - 30)}px);
	`}
`;

export const Summary = styled.View`
	${({ theme }) => css`
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: ${theme.colors.utils.secondary};
	`}
`;

export const TextContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const LeftText = styled(Text.LightSecondary)`
	${({ theme }) => css`
		padding-bottom: ${theme.spaces[4]};
		font-size: ${theme.fontSizes[4]};
	`}
`;

export const RightText = styled(Text.MediumSecondary)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[4]};
	`}
`;

export const Total = styled(Text.MediumPrimary)`
	${({ theme }) => css`
		padding: ${theme.spaces[4]} 0px;
		font-size: ${theme.fontSizes[5]};
	`}
`;

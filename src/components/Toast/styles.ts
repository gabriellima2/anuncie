import styled from "styled-components/native";

import { FloatContainer } from "@components/FloatContainer";
import { Text } from "@components/Text";

interface ContentStyles {
	bgColor: string;
}

export const Container = styled(FloatContainer)`
	align-self: center;
`;

export const Content = styled.View<ContentStyles>`
	flex: 1;

	flex-direction: row;
	align-items: center;

	padding: 12px 16px;
	border-radius: 8px;
	background-color: ${({ bgColor }) => bgColor};
`;

export const Message = styled(Text.MediumPrimary)`
	margin-left: 12px;
	color: #000000;
`;

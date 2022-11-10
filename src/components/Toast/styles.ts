import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { FloatContainer } from "../FloatContainer";
import { Text } from "../Text";

interface ContentStyles {
	bgColor: string;
}

const screenWidthDevice = Dimensions.get("screen").width;

export const Container = styled(FloatContainer)`
	width: ${screenWidthDevice - 20}px;
	align-self: center;
`;

export const Content = styled.View<ContentStyles>`
	flex: 1;

	flex-direction: row;
	align-items: center;

	padding: 12px;
	border-radius: 8px;
	background-color: ${({ bgColor }) => bgColor};
`;

export const Message = styled(Text.RegularPrimary)`
	margin-left: 12px;
	color: #000000;
`;

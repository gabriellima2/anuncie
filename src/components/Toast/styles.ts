import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { FloatContainer } from "../FloatContainer";
import { Text } from "../Text";

interface ContentStyles {
	colorBasedType: string;
}

const screenWidthDevice = Dimensions.get("screen").width;

export const Container = styled(FloatContainer)`
	width: ${screenWidthDevice - 15}px;
	align-self: center;
`;

export const Content = styled.View<ContentStyles>`
	flex-direction: row;
	align-items: center;

	padding: 12px;
	border-radius: 8px;
	background-color: ${({ colorBasedType }) => colorBasedType};
`;

export const Message = styled(Text.RegularPrimary)`
	margin-left: 12px;
	color: #000000;
`;

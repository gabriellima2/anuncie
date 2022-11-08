import { Platform, StatusBar as StatusBarRN } from "react-native";
import styled, { css, useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import type { Node } from "../types";

interface ContainerStyle {
	addVerticalSpacing?: boolean;
}

interface AppLayoutProps extends ContainerStyle, Node {}

const SafeArea = styled.SafeAreaView`
	${({ theme }) => css`
		flex: 1;
		background-color: ${theme.colors.bg};
	`}
`;

export const Container = styled.View<ContainerStyle>`
	${({ theme, addVerticalSpacing }) => css`
		flex: 1;
		padding-top: ${theme.spaces[2]};
		padding-left: ${addVerticalSpacing ? theme.spaces[3] : 0};
		padding-right: ${addVerticalSpacing ? theme.spaces[3] : 0};
		background-color: ${theme.colors.bg};
	`}
`;

export const AppLayout = (props: AppLayoutProps) => {
	const { currentThemeName } = useTheme();

	const statusBarStyle = currentThemeName === "dark" ? "light" : "dark";

	return (
		<SafeArea>
			<StatusBar style={statusBarStyle} />
			<Container {...props} />
		</SafeArea>
	);
};

const defaultProps: Pick<AppLayoutProps, "addVerticalSpacing"> = {
	addVerticalSpacing: true,
};

AppLayout.defaultProps = defaultProps;

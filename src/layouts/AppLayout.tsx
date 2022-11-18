import styled, { css, useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import type { Node } from "../types";

interface ContainerStyle {
	addHorizontalSpacing?: boolean;
}

interface AppLayoutProps extends ContainerStyle, Node {}

const SafeArea = styled.SafeAreaView`
	${({ theme }) => css`
		flex: 1;
		background-color: ${theme.colors.bg};
	`}
`;

export const Container = styled.View<ContainerStyle>`
	${({ theme, addHorizontalSpacing }) => css`
		flex: 1;
		padding: ${theme.spaces[3]} ${addHorizontalSpacing ? theme.spaces[3] : 0};
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

const defaultProps: Pick<AppLayoutProps, "addHorizontalSpacing"> = {
	addHorizontalSpacing: true,
};

AppLayout.defaultProps = defaultProps;

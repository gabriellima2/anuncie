import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { NewAdLink } from "@components/Links/NewAdLink";

import { DetailsScreen } from "@screens/DetailsScreen";
import { ProfileScreen } from "@screens/ProfileScreen";
import { NewAdScreen } from "@screens/NewAdScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { CartScreen } from "@screens/CartScreen";
import { AdsScreen } from "@screens/AdsScreen";

import type { Node, RootStackParams, StackRouteNames } from "../types";

const Stack = createNativeStackNavigator<RootStackParams>();

interface NavigatorProps extends Node {
	initialRouteName: StackRouteNames;
}

const Navigator = (props: NavigatorProps) => {
	const { colors, fonts } = useTheme();

	return (
		<Stack.Navigator
			initialRouteName={props.initialRouteName}
			screenOptions={{
				headerTitleAlign: "center",
				headerTitleStyle: {
					fontFamily: fonts.mainMedium,
					color: colors.fonts.primary,
					fontSize: 24,
				},
				headerTintColor: colors.fonts.primary,
				headerShadowVisible: false,
				headerStyle: {
					backgroundColor: colors.bg,
				},
			}}
		>
			{props.children}
		</Stack.Navigator>
	);
};

export const StackHomeNavigator = () => (
	<Navigator initialRouteName={"Home"}>
		<Stack.Screen
			name={"Home"}
			component={HomeScreen}
			options={{ title: "Explorar" }}
		/>
		<Stack.Screen
			name={"Details"}
			component={DetailsScreen}
			options={{ title: "" }}
		/>
	</Navigator>
);

export const StackAdsNavigator = () => (
	<Navigator initialRouteName={"Ads"}>
		<Stack.Screen
			name={"Ads"}
			component={AdsScreen}
			options={{
				title: "Anúncios",
				headerRight: () => <NewAdLink size="small" />,
			}}
		/>
		<Stack.Screen
			name={"NewAd"}
			component={NewAdScreen}
			options={{ title: "Novo anúncio" }}
		/>
	</Navigator>
);

export const StackCartNavigator = () => (
	<Navigator initialRouteName={"Cart"}>
		<Stack.Screen
			name={"Cart"}
			component={CartScreen}
			options={{ title: "Carrinho" }}
		/>
	</Navigator>
);

export const StackProfileNavigator = () => (
	<Navigator initialRouteName={"Profile"}>
		<Stack.Screen
			name={"Profile"}
			component={ProfileScreen}
			options={{ title: "Sua Conta" }}
		/>
	</Navigator>
);

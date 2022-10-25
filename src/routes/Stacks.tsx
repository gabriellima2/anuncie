import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { DetailsScreen } from "../screens/DetailsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { CartScreen } from "../screens/CartScreen";
import { AdsScreen } from "../screens/AdsScreen";

import type { Node, RootStackParams } from "../types";

const Stack = createNativeStackNavigator<RootStackParams>();

interface NavigatorProps extends Node {
	initialRouteName: keyof RootStackParams;
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
	<Navigator initialRouteName="Home">
		<Stack.Screen
			name="Home"
			component={HomeScreen}
			options={{ title: "Explorar" }}
		/>
		<Stack.Screen name="Details" component={DetailsScreen} />
	</Navigator>
);

export const StackAdsNavigator = () => (
	<Navigator initialRouteName="Ads">
		<Stack.Screen name="Ads" component={AdsScreen} />
		<Stack.Screen name="NewAd" component={AdsScreen} />
	</Navigator>
);

export const StackCartNavigator = () => (
	<Navigator initialRouteName="Cart">
		<Stack.Screen name="Cart" component={CartScreen} />
		<Stack.Screen name="Details" component={DetailsScreen} />
	</Navigator>
);

export const StackProfileNavigator = () => (
	<Navigator initialRouteName="Profile">
		<Stack.Screen name="Profile" component={ProfileScreen} />
	</Navigator>
);

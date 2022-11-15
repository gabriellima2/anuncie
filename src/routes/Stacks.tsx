import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { DetailsScreen } from "@screens/DetailsScreen";
import { ProfileScreen } from "@screens/ProfileScreen";
import { NewAdScreen } from "@screens/NewAdScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { CartScreen } from "@screens/CartScreen";
import { AdsScreen } from "@screens/AdsScreen";

import type { Node, RootStackParams, StackRouteNames } from "../types";

const Stack = createNativeStackNavigator<RootStackParams>();

export const stackRoutesNames: Record<StackRouteNames, StackRouteNames> = {
	Home: "Home",
	Details: "Details",
	Cart: "Cart",
	Ads: "Ads",
	NewAd: "NewAd",
	Profile: "Profile",
};

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
	<Navigator initialRouteName={stackRoutesNames.Home}>
		<Stack.Screen
			name={stackRoutesNames.Home}
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
	<Navigator initialRouteName={stackRoutesNames.Ads}>
		<Stack.Screen name={stackRoutesNames.Ads} component={AdsScreen} />
		<Stack.Screen name={stackRoutesNames.NewAd} component={NewAdScreen} />
	</Navigator>
);

export const StackCartNavigator = () => (
	<Navigator initialRouteName={stackRoutesNames.Cart}>
		<Stack.Screen name={stackRoutesNames.Cart} component={CartScreen} />
		<Stack.Screen name={"Details"} component={DetailsScreen} />
	</Navigator>
);

export const StackProfileNavigator = () => (
	<Navigator initialRouteName={stackRoutesNames.Profile}>
		<Stack.Screen
			name={stackRoutesNames.Profile}
			component={ProfileScreen}
			options={{ title: "Sua Conta" }}
		/>
	</Navigator>
);

import type { ParamListBase, RouteProp } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Dimensions } from "react-native";
import {
	getFocusedRouteNameFromRoute,
	NavigationContainer,
} from "@react-navigation/native";
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import { Icon } from "@components/Icon";

import {
	StackAdsNavigator,
	StackCartNavigator,
	StackHomeNavigator,
	StackProfileNavigator,
	stackRoutesNames,
} from "./Stacks";

import { globalStyles } from "../themes";

const Tab = createBottomTabNavigator();

const windowHeight = Dimensions.get("window").height;

function hideTabBarOnSpecificRoutes(route: RouteProp<ParamListBase, string>) {
	const focusedRouteName = getFocusedRouteNameFromRoute(route);

	if (!focusedRouteName) return false;

	return (
		focusedRouteName === (stackRoutesNames.Details || stackRoutesNames.NewAd)
	);
}

function setIcon(
	name: string,
	unfocusedColor: string
): Pick<BottomTabNavigationOptions, "tabBarIcon"> {
	return {
		tabBarIcon: ({ focused }) => (
			<Icon
				name={name}
				size={windowHeight < 680 ? 24 : 28}
				color={focused ? globalStyles.colors.main : unfocusedColor}
			/>
		),
	};
}

export const Routes = () => {
	const { colors } = useTheme();

	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator
				initialRouteName="HomePage"
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarShowLabel: false,
					tabBarHideOnKeyboard: true,
					tabBarStyle: {
						display: hideTabBarOnSpecificRoutes(route) ? "none" : "flex",
						height: windowHeight < 680 ? 60 : 68,

						// Remover o fundo branco
						position: "absolute",
						borderTopWidth: 0,

						borderTopRightRadius: 24,
						borderTopLeftRadius: 24,

						backgroundColor: colors.utils.primary,
					},
				})}
			>
				<Tab.Screen
					name="HomePage"
					component={StackHomeNavigator}
					options={{ ...setIcon("home-outline", colors.fonts.secondary) }}
				/>
				<Tab.Screen
					name="My Ads"
					component={StackAdsNavigator}
					options={{ ...setIcon("pricetags-outline", colors.fonts.secondary) }}
				/>
				<Tab.Screen
					name="My Cart"
					component={StackCartNavigator}
					options={{ ...setIcon("cart-outline", colors.fonts.secondary) }}
				/>
				<Tab.Screen
					name="My Profile"
					component={StackProfileNavigator}
					options={{ ...setIcon("person-outline", colors.fonts.secondary) }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

import type { ParamListBase, RouteProp } from "@react-navigation/native";
import { useTheme } from "styled-components";
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
} from "./Stacks";

import { globalStyles } from "../themes";
import { stacksWithoutTabBar } from "@constants/stackRoutesNames";

const Tab = createBottomTabNavigator();

function hideTabBarOnSpecificRoutes(route: RouteProp<ParamListBase, string>) {
	const focusedRouteName = getFocusedRouteNameFromRoute(route);

	if (!focusedRouteName) return false;

	const hasTabBar = stacksWithoutTabBar.find(
		(name) => name === focusedRouteName
	);

	return !!hasTabBar;
}

function setIcon(
	name: string,
	unfocusedColor: string
): Pick<BottomTabNavigationOptions, "tabBarIcon"> {
	return {
		tabBarIcon: ({ focused }) => (
			<Icon
				name={name}
				size={24}
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
						height: 55,

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

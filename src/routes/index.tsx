import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Dimensions } from "react-native";
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import { Icon } from "../components/Icon";

import {
	StackAdsNavigator,
	StackCartNavigator,
	StackHomeNavigator,
	StackProfileNavigator,
} from "./Stacks";

import { globalStyles } from "../themes";

const Tab = createBottomTabNavigator();

const windowHeight = Dimensions.get("window").height;

function setIcon(
	name: string,
	unfocusedColor: string
): BottomTabNavigationOptions {
	return {
		tabBarIcon: ({ focused }) => (
			<Icon
				name={name}
				size={28}
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
				screenOptions={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarStyle: {
						height: windowHeight < 680 ? 68 : 84,

						// Remover o fundo branco
						position: "absolute",
						borderTopWidth: 0,

						borderTopRightRadius: 24,
						borderTopLeftRadius: 24,

						backgroundColor: colors.utils.primary,
					},
				}}
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

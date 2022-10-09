import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Dimensions } from "react-native";
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import { Icon } from "../components/Icon";

import { ProfileScreen } from "../screens/ProfileScreen";
import { CartScreen } from "../screens/CartScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { AdsScreen } from "../screens/AdsScreen";

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
				onlyIcon={true}
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
				screenOptions={{
					tabBarShowLabel: false,
					tabBarStyle: {
						backgroundColor: colors.utils.primary,

						borderTopRightRadius: 24,
						borderTopLeftRadius: 24,
						height: windowHeight < 680 ? 68 : 84,
					},
				}}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={setIcon("home-outline", colors.fonts.secondary)}
				/>
				<Tab.Screen
					name="Ads"
					component={AdsScreen}
					options={setIcon("pricetags-outline", colors.fonts.secondary)}
				/>
				<Tab.Screen
					name="Cart"
					component={CartScreen}
					options={setIcon("cart-outline", colors.fonts.secondary)}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={setIcon("person-outline", colors.fonts.secondary)}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

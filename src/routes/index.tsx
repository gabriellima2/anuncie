import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import { ProfileScreen } from "../screens/ProfileScreen";
import { CartScreen } from "../screens/CartScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { AdsScreen } from "../screens/AdsScreen";

const Tab = createBottomTabNavigator();

function setIcon(name: string): BottomTabNavigationOptions {
	return {
		tabBarIcon: ({ focused }) => (
			<Icon name={name} size={24} color={focused ? "#c1c1c1" : "#000"} />
		),
	};
}

export const Routes = () => {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={setIcon("home-outline")}
				/>
				<Tab.Screen
					name="Ads"
					component={AdsScreen}
					options={setIcon("pricetags-outline")}
				/>
				<Tab.Screen
					name="Cart"
					component={CartScreen}
					options={setIcon("cart-outline")}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={setIcon("person-outline")}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

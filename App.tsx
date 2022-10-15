import { useFonts } from "expo-font";
import { Text } from "react-native";

import { ThemeContextProvider } from "./src/contexts/ThemeContext";
import { Routes } from "./src/routes";

export default function App() {
	const [fontsLoaded] = useFonts({
		SunflowerLight: require("./assets/fonts/Sunflower-Light.ttf"),
		QuestrialRegular: require("./assets/fonts/Questrial-Regular.ttf"),
		SunflowerMedium: require("./assets/fonts/Sunflower-Medium.ttf"),
		SunflowerBold: require("./assets/fonts/Sunflower-Bold.ttf"),
	});

	if (!fontsLoaded) return <Text>Carregando...</Text>;

	return (
		<ThemeContextProvider>
			<Routes />
		</ThemeContextProvider>
	);
}

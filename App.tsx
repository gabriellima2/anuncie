import { useFonts } from "expo-font";
import { Text } from "react-native";
import { Provider } from "react-redux";

import { Toast } from "@components/Toast";

import { ThemeContextProvider } from "@contexts/ThemeContext";
import { store } from "@redux/store";
import { Routes } from "@routes/index";

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
			<Provider store={store}>
				<Toast />
				<Routes />
			</Provider>
		</ThemeContextProvider>
	);
}

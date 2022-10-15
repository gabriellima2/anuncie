import { Text } from "react-native";
import { ChangeThemeButton } from "../../components/Buttons/ChangeThemeButton";

import { AppLayout } from "../../layouts/AppLayout";

export const HomeScreen = () => {
	return (
		<AppLayout>
			<ChangeThemeButton />
			<Text>Home</Text>
		</AppLayout>
	);
};

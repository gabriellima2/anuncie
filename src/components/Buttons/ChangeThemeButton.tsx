import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";

import { Icon } from "@components/Icon";

export const ChangeThemeButton = () => {
	const { currentThemeName, changeTheme, colors } = useTheme();

	const icon = currentThemeName === "dark" ? "moon-outline" : "sunny-outline";

	return (
		<TouchableOpacity onPress={changeTheme}>
			<Icon name={icon} size={24} color={colors.main} />
		</TouchableOpacity>
	);
};

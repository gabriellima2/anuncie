import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components/native";

import { globalStyles, dark, light } from "../themes";

interface ThemeContextProviderProps {
	children: ReactNode;
}

type CurrentThemeName = "light" | "dark";

export const ThemeContextProvider = ({
	children,
}: ThemeContextProviderProps) => {
	const [currentThemeName, setCurrentThemeName] =
		useState<CurrentThemeName>("light");

	const changeTheme = () => {
		if (currentThemeName === "light") return setCurrentThemeName("dark");

		setCurrentThemeName("light");
	};

	const themesAvailable = {
		dark,
		light,
	};

	return (
		<ThemeProvider
			theme={{
				...themesAvailable[currentThemeName],
				...globalStyles,
				changeTheme,
			}}
		>
			{children}
		</ThemeProvider>
	);
};

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";

import { globalStyles, dark, light } from "../themes";
import { localStorage } from "../utils/localStorage";

interface ThemeContextProviderProps {
	children: ReactNode;
}

type CurrentThemeName = "light" | "dark";

const THEME_KEY = "theme-preference";

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

	useEffect(() => {
		(async () => {
			await localStorage.set(THEME_KEY, currentThemeName);
		})();
	}, [currentThemeName]);

	useEffect(() => {
		(async () => {
			const userThemePreference = await localStorage.get<CurrentThemeName>(
				THEME_KEY
			);

			if (!userThemePreference) return setCurrentThemeName("light");

			setCurrentThemeName(userThemePreference);
		})();
	}, []);

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

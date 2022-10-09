import "styled-components";

import { CurrentThemeName } from "../contexts/ThemeContext";
import { globalStyles } from "./";

declare module "styled-components" {
	type Theme = typeof globalStyles;

	export interface DefaultTheme extends Theme {
		currentThemeName: CurrentThemeName;
		changeTheme: () => void;
	}
}

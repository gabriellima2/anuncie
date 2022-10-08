import "styled-components";
import { globalStyles } from "./";

declare module "styled-components" {
	type Theme = typeof globalStyles;

	export interface DefaultTheme extends Theme {
		changeTheme: () => void;
	}
}

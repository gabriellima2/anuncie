import { ThemeContextProvider } from "./src/contexts/ThemeContext";
import { Routes } from "./src/routes";

export default function App() {
	return (
		<ThemeContextProvider>
			<Routes />
		</ThemeContextProvider>
	);
}

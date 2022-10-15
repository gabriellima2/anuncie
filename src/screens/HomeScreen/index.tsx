import { Text } from "react-native";

import { SearchBar } from "../../components/SearchBar";

import { AppLayout } from "../../layouts/AppLayout";

export const HomeScreen = () => {
	const handleSearch = (valueSearch: string) => console.log(valueSearch);

	return (
		<AppLayout>
			<SearchBar handleSearch={handleSearch} />
			<Text>Home</Text>
		</AppLayout>
	);
};

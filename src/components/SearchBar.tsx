import { useState } from "react";
import styled, { useTheme } from "styled-components/native";

import { Button } from "./Buttons/Button";
import { Input } from "./Inputs/Input";
import { Icon } from "./Icon";

interface SearchBarProps {
	handleSearch: (value: string) => void;
}

const Container = styled.View`
	width: 100%;
	flex-direction: row;
`;

export const SearchBar = ({ handleSearch }: SearchBarProps) => {
	const [searchValue, setSearchValue] = useState("");
	const { colors } = useTheme();

	return (
		<Container>
			<Input
				value={searchValue}
				autoCorrect={false}
				autoCapitalize="none"
				returnKeyType="search"
				placeholder="Pesquise"
				accessibilityLabel="Campo de busca"
				accessibilityHint="Mostrará uma tela com o resultado"
				onChangeText={setSearchValue}
				placeholderTextColor={`${colors.fonts.secondary}ab`}
				onSubmitEditing={() => handleSearch(searchValue)}
			/>
			<Button
				accessibilityLabel="Buscar"
				accessibilityHint="Realizará a busca"
				style={{ marginLeft: 12 }}
			>
				<Icon name="ios-search-outline" size={20} color={"#f1f1f1"} />
			</Button>
		</Container>
	);
};

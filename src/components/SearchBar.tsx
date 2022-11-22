import { useState } from "react";
import { Keyboard } from "react-native";
import styled, { css } from "styled-components/native";

import { useReactNavigation } from "@hooks/useReactNavigation";

import { Button } from "./Buttons/Button";
import { Input } from "./Inputs/Input";
import { Icon } from "./Icon";

const Container = styled.View`
	${({ theme }) => css`
		width: 100%;
		flex-direction: row;

		padding: 0px ${theme.spaces[3]} ${theme.spaces[2]} ${theme.spaces[3]};
	`}
`;

export const SearchBar = () => {
	const navigation = useReactNavigation();
	const [searchValue, setSearchValue] = useState("");

	const handleSearch = () => {
		if (!searchValue.trim()) return;

		navigation.navigate("SearchResult", { searchValue: searchValue.trim() });
	};

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
				onSubmitEditing={handleSearch}
				style={{ flex: 1 }}
			/>
			<Button
				accessibilityLabel="Buscar"
				accessibilityHint="Realizará a busca"
				style={{ marginLeft: 12 }}
				onPress={() => {
					Keyboard.dismiss();
					handleSearch();
				}}
			>
				<Icon name="ios-search-outline" size={20} color={"#f1f1f1"} />
			</Button>
		</Container>
	);
};

import { Products } from "../../components/Products";
import { SearchBar } from "../../components/SearchBar";

import { AppLayout } from "../../layouts/AppLayout";

import { products } from "../../mocks/products";

export const HomeScreen = () => {
	const handleSearch = (valueSearch: string) => console.log(valueSearch);

	return (
		<AppLayout>
			<SearchBar handleSearch={handleSearch} />
			<Products products={products} />
		</AppLayout>
	);
};

import { Products } from "../../components/Products";
import { AppLayout } from "../../layouts/AppLayout";

import { products } from "../../mocks/products";

export const HomeScreen = () => {
	return (
		<AppLayout>
			<Products products={products} />
		</AppLayout>
	);
};

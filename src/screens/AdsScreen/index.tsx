import { useAdSelect } from "@redux/slices/ad.slice";

import { NewAdLink } from "@components/Links/NewAdLink";
import { Text } from "@components/Text";

import { AppLayout } from "@layouts/AppLayout";

export const AdsScreen = () => {
	const { products } = useAdSelect();

	return (
		<AppLayout>
			<NewAdLink />
			{products.map((product) => (
				<Text.RegularPrimary key={product.id}>
					{product.name}
				</Text.RegularPrimary>
			))}
		</AppLayout>
	);
};

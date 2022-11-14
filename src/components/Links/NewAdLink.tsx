import { useReactNavigation } from "@hooks/useReactNavigation";

import { Icon } from "@components/Icon";
import { Link } from "./Link";

export const NewAdLink = () => {
	const navigation = useReactNavigation();

	return (
		<Link variants="background" onPress={() => navigation.navigate("NewAd")}>
			<Icon name="add" color="#fff" size={24} />
		</Link>
	);
};

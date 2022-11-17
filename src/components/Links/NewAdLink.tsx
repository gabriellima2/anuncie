import { useReactNavigation } from "@hooks/useReactNavigation";

import { ButtonProps } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { Link } from "./Link";

export const NewAdLink = (props: Omit<ButtonProps, "children">) => {
	const navigation = useReactNavigation();

	return (
		<Link
			{...props}
			style={{ padding: 4 }}
			variants="background"
			onPress={() => navigation.navigate("NewAd")}
		>
			<Icon name="add" color="#fff" size={18} />
		</Link>
	);
};

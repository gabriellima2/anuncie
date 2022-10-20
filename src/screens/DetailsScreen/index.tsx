import { Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppLayout } from "../../layouts/AppLayout";

import type { RootStackParams } from "../../types";

interface DetailsScreenProps
	extends NativeStackScreenProps<RootStackParams, "Details"> {}

export const DetailsScreen = (props: DetailsScreenProps) => {
	const id = props.route.params.id;

	return (
		<AppLayout>
			<Text>{id}</Text>
		</AppLayout>
	);
};

import { StyleProp, ViewStyle } from "react-native";

export type CSS = StyleProp<ViewStyle>;

export interface ProductData {
	id: string;
	name: string;
	description: string;
	images: {
		main: string;
		others: string[];
	};
	categories: string[];
}

import type { ReactNode } from "react";
import type {
	ImageSourcePropType,
	StyleProp,
	TouchableOpacityProps,
	ViewStyle,
} from "react-native";

export type CSS = StyleProp<ViewStyle>;

export interface Node {
	children: ReactNode;
}

export interface ProductData {
	id: string;
	name: string;
	description: string;
	price: string;
	images: {
		main: ImageSourcePropType;
		others: ImageSourcePropType[];
	};
	categories: string[];
}

interface ButtonDefaultProps extends TouchableOpacityProps {
	style?: CSS;
}

export type RootStackParams = {
	Details: { id: number | string };
};

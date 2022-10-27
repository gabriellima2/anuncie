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
}

interface ButtonDefaultProps extends TouchableOpacityProps {
	style?: CSS;
}

export type RootStackParams = {
	Home: undefined;
	Ads: undefined;
	NewAd: undefined;
	Cart: undefined;
	Profile: undefined;
	Details: { id: string };
};

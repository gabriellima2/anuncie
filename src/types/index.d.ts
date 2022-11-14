import type { ReactNode } from "react";
import type {
	FlatListProps,
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
	availableQuantity: number;
	sourceImage: ImageSourcePropType | undefined;
}

export interface CartProductData extends ProductData {
	quantity: number;
}

export interface AdProductData extends ProductData {}

export type FlatListProduct<T> = Omit<
	FlatListProps<T>,
	"data" | "renderItem" | "keyExtractor"
>;

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

export type StackRouteNames = keyof RootStackParams;

export interface ToastColors {
	success: string;
	warning: string;
	error: string;
	default: string;
}

export type ToastTypes = keyof ToastColors;

export interface AdFormData extends Record<keyof AdProductData, string> {}

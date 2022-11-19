import type { ReactNode } from "react";
import type {
	TextInputProps,
	StyleProp,
	TouchableOpacityProps,
	ViewStyle,
} from "react-native";
import { InferType } from "yup";

import { adSchema } from "src/schemas/ad.schema";

export type CSS = StyleProp<ViewStyle>;

export interface Node {
	children: ReactNode;
}

export interface ProductData {
	id: string;
	name: string;
	description?: string;
	price: string;
	availableQuantity: number;
	sourceImage: string;
	soldBy: string;
}

export interface CartProductData extends ProductData {
	quantity: number;
}

export interface AdProductData extends ProductData {}

export interface HandleAdProductData
	extends Omit<ProductData, "soldBy" | "id"> {}

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
	AdEdit: { id: string };
};

export type StackRouteNames = keyof RootStackParams;

export interface ToastColors {
	success: string;
	warning: string;
	error: string;
	default: string;
}

export type ToastTypes = keyof ToastColors;

export interface AdFormData extends InferType<typeof adSchema> {}

export interface FieldsData<T> extends TextInputProps {
	id: keyof T | string;
	label: string;
}

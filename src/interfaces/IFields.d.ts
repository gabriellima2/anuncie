import type { TextInputProps } from "react-native";

export interface IFields<T> extends TextInputProps {
	id: keyof T | string;
	label: string;
}

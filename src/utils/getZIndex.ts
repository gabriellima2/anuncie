import { Platform } from "react-native";

export function setZIndex(val: number) {
	return Platform.select({
		ios: {
			zIndex: val,
		},
		android: {
			elevation: val,
		},
	});
}

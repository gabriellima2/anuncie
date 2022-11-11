import { ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { setZIndex } from "@utils/getZIndex";

export const FloatContainer = (props: ViewProps) => (
	<SafeAreaView
		{...props}
		style={[
			props.style,
			{
				...setZIndex(40),
				position: "absolute",
				bottom: 80,
			},
		]}
	/>
);

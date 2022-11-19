import {
	GestureResponderEvent,
	LayoutAnimation,
	LayoutAnimationConfig,
	TouchableOpacityProps,
} from "react-native";

import { Icon } from "@components/Icon";
import { Button } from "./Button";

export interface RemoveButtonProps extends TouchableOpacityProps {}

export const RemoveButton = (props: RemoveButtonProps) => {
	const layoutAnimConfig: LayoutAnimationConfig = {
		duration: 50,
		delete: {
			duration: 50,
			type: LayoutAnimation.Types.linear,
			property: LayoutAnimation.Properties.opacity,
		},
	};

	const handlePress = (e: GestureResponderEvent) => {
		if (!props.onPress) return;

		props.onPress(e);
		LayoutAnimation.configureNext(layoutAnimConfig);
	};

	return (
		<Button
			{...props}
			onPress={handlePress}
			style={[props.style, { backgroundColor: "#DD4545" }]}
			size="small"
		>
			<Icon name="trash" size={18} color="#f1f1f1" />
		</Button>
	);
};

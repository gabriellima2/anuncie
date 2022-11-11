import {
	GestureResponderEvent,
	LayoutAnimation,
	LayoutAnimationConfig,
} from "react-native";

import { Icon } from "@components/Icon";
import { Button } from "./Button";

import type { ButtonDefaultProps } from "../../types";

export interface RemoveButtonProps extends ButtonDefaultProps {}

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

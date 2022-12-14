import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LayoutAnimation, LayoutAnimationConfig } from "react-native";

import { hideToast, useToastSelect } from "@redux/slices/toast.slice";

import { Icon } from "@components/Icon";

import type { IToast } from "@interfaces/IToast";
import { Container, Content, Message } from "./styles";

const colors: IToast = {
	success: "#46EE6F",
	warning: "#EEDF46",
	error: "#EE4646",
	default: "#EBEBEB",
};

let timer: NodeJS.Timeout | undefined;

export const Toast = () => {
	const toast = useToastSelect();
	const dispatch = useDispatch();

	const layoutAnimConfig: LayoutAnimationConfig = {
		duration: 200,
		create: {
			duration: 100,
			type: LayoutAnimation.Types.linear,
			property: LayoutAnimation.Properties.opacity,
		},
		delete: {
			duration: 100,
			type: LayoutAnimation.Types.linear,
			property: LayoutAnimation.Properties.opacity,
		},
	};

	const handleHide = () => dispatch(hideToast());

	useEffect(() => {
		if (!toast.isActive) return;

		LayoutAnimation.configureNext(layoutAnimConfig);

		timer = setTimeout(() => {
			LayoutAnimation.configureNext(layoutAnimConfig);
			handleHide();
		}, toast.time);

		return () => clearTimeout(timer);
	}, [toast.isActive]);

	if (!toast.isActive) return null;

	return (
		<Container accessibilityRole="alert">
			<Content bgColor={colors[toast.type]}>
				<Icon name={toast.iconName} color="#0a0a0a" size={20} />
				<Message>{toast.message}</Message>
			</Content>
		</Container>
	);
};

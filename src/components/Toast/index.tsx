import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TouchableWithoutFeedback } from "react-native";

import { hideToast, useToastSelect } from "../../redux/slices/toast.slice";

import { Icon } from "../Icon";

import type { ToastColors } from "../../types";
import { Container, Content, Message } from "./styles";

const colors: ToastColors = {
	success: "#46EE6F",
	warning: "#EEDF46",
	error: "#EE4646",
	default: "#EBEBEB",
};

let timer: NodeJS.Timeout | undefined;

export const Toast = () => {
	const toast = useToastSelect();
	const dispatch = useDispatch();

	const handleHide = () => dispatch(hideToast());

	useEffect(() => {
		if (!toast.isActive) return;

		timer = setTimeout(() => handleHide(), toast.time);

		return () => clearTimeout(timer);
	}, [toast.isActive]);

	if (!toast.isActive) return null;

	return (
		<Container accessibilityRole="alert">
			<TouchableWithoutFeedback onPress={handleHide}>
				<Content colorBasedType={colors[toast.type]}>
					<Icon name={toast.iconName} color="#000000cd" size={20} />
					<Message>{toast.message}</Message>
				</Content>
			</TouchableWithoutFeedback>
		</Container>
	);
};
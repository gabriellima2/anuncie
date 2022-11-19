import type { IChildren } from "@interfaces/IChildren";

import {
	KeyboardAvoidingView,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

interface KeyboardAvoidingWrapperProps extends IChildren {}

/*
Teclado não sobrepor o elemento, habilitamos scroll para view e
quando clicar fora do teclado ele fecha.
*/
export const KeyboardAvoidingWrapper = ({
	children,
}: KeyboardAvoidingWrapperProps) => (
	<KeyboardAvoidingView style={{ flex: 1 }}>
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{children}
			</TouchableWithoutFeedback>
		</ScrollView>
	</KeyboardAvoidingView>
);

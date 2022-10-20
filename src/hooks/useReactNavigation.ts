import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParams } from "../types";

export const useReactNavigation = () =>
	useNavigation<NativeStackNavigationProp<RootStackParams>>();

import { TStackParams } from "@globalTypes/TStack";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useReactNavigation = () =>
	useNavigation<NativeStackNavigationProp<TStackParams>>();

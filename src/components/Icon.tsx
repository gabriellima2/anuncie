import Ionicons from "react-native-vector-icons/Ionicons";

interface IconProps {
	name: string;
	size: number;
	color: string;
}

export const Icon = (props: IconProps) => <Ionicons {...props} />;

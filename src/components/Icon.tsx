import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IconProps {
	onlyIcon?: boolean;
	name: string;
	size: number;
	color: string;
}

export const Icon = ({ onlyIcon, ...props }: IconProps) => (
	<>
		{onlyIcon ? (
			<Ionicons {...props} />
		) : (
			<Text>
				<Ionicons {...props} />
			</Text>
		)}
	</>
);

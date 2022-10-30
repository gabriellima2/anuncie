import { useState } from "react";

import { Button, ButtonProps } from "../Button";
import { Icon } from "../../Icon";

import { Container, QuantityText } from "./styles";

interface QuantityButtonProps {
	maxQuantity: number;
}

type Action = "decrement" | "increment";

interface Props extends Omit<ButtonProps, "size" | "children"> {
	handlePress: (action: Action) => void;
}

const DecrementButton = ({ handlePress, ...props }: Props) => (
	<Button size="small" onPress={() => handlePress("decrement")} {...props}>
		<Icon name="remove" color="white" size={18} />
	</Button>
);

const IncrementButton = ({ handlePress, ...props }: Props) => (
	<Button size="small" onPress={() => handlePress("increment")} {...props}>
		<Icon name="add" color="white" size={18} />
	</Button>
);

export const QuantityButton = ({
	maxQuantity,
	...props
}: QuantityButtonProps) => {
	const [currentQuantity, setCurrentQuantity] = useState(1);

	const handleUpdatedQuantity = (action: Action) => {
		if (action === "decrement" && currentQuantity > 1) {
			return setCurrentQuantity((prevState) => (prevState -= 1));
		}

		if (action === "increment" && currentQuantity < maxQuantity) {
			return setCurrentQuantity((prevState) => (prevState += 1));
		}
	};

	return (
		<Container>
			<DecrementButton
				handlePress={handleUpdatedQuantity}
				disabled={currentQuantity === 1}
				accessibilityLabel="Diminui a quantidade"
			/>
			<QuantityText>{currentQuantity}</QuantityText>
			<IncrementButton
				handlePress={handleUpdatedQuantity}
				disabled={currentQuantity === maxQuantity}
				accessibilityLabel="Aumenta a quantidade"
			/>
		</Container>
	);
};

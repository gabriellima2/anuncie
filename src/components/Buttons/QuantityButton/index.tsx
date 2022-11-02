import React, { forwardRef, useImperativeHandle, useState } from "react";

import { Button, ButtonProps } from "../Button";
import { Icon } from "../../Icon";

import { Container, QuantityText } from "./styles";

export type QuantityButtonRef = { currentQuantity: number } | null;

interface QuantityButtonProps {
	maxQuantity: number;
	initialQuantity?: number;
}

type Action = "decrement" | "increment";

interface Props extends Omit<ButtonProps, "size" | "children"> {
	handlePress: (action: Action) => void;
}

const DecrementButton = React.memo(({ handlePress, ...props }: Props) => (
	<Button size="small" onPress={() => handlePress("decrement")} {...props}>
		<Icon name="remove" color="white" size={18} />
	</Button>
));

const IncrementButton = React.memo(({ handlePress, ...props }: Props) => (
	<Button size="small" onPress={() => handlePress("increment")} {...props}>
		<Icon name="add" color="white" size={18} />
	</Button>
));

export const QuantityButton = forwardRef<
	QuantityButtonRef,
	QuantityButtonProps
>(({ maxQuantity, initialQuantity, ...props }, ref) => {
	const [currentQuantity, setCurrentQuantity] = useState(initialQuantity || 1);

	const handleUpdatedQuantity = (action: Action) => {
		if (action === "decrement" && currentQuantity > 1) {
			return setCurrentQuantity((prevState) => (prevState -= 1));
		}

		if (action === "increment" && currentQuantity < maxQuantity) {
			return setCurrentQuantity((prevState) => (prevState += 1));
		}
	};

	useImperativeHandle(ref, () => ({
		currentQuantity,
	}));

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
});

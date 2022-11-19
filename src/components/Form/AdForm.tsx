import { useRef } from "react";
import styled from "styled-components/native";
import { SubmitHandler } from "react-hook-form";

import {
	QuantityButton,
	QuantityButtonProps,
	QuantityButtonRef,
} from "@components/Buttons/QuantityButton";
import { Label } from "@components/Label";
import { BaseForm, BaseFormProps } from "./BaseForm";

import { adSchema } from "src/schemas/ad.schema";
import type { IAdForm, IAdFormProductParams } from "@interfaces/IAdForm";

const Quantity = styled.View`
	align-items: center;
	padding-top: 12px;
`;

interface AdFormProps
	extends Pick<BaseFormProps<IAdForm>, "textButton" | "fields">,
		Pick<QuantityButtonProps, "initialQuantity"> {
	onSubmit: (data: IAdFormProductParams) => void;
}

export const AdForm = ({
	initialQuantity,
	onSubmit,
	...props
}: AdFormProps) => {
	const quantityRef = useRef<QuantityButtonRef>(null);

	const handleSubmit: SubmitHandler<IAdForm> = (data) => {
		const availableQuantity = quantityRef.current?.currentQuantity || 1;

		onSubmit({ ...data, availableQuantity });
	};

	return (
		<BaseForm<IAdForm> yupSchema={adSchema} onSubmit={handleSubmit} {...props}>
			<Quantity>
				<Label>Quantidade disponível</Label>
				<QuantityButton
					maxQuantity={100}
					initialQuantity={initialQuantity}
					ref={quantityRef}
				/>
			</Quantity>
		</BaseForm>
	);
};

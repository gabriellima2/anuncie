import { useRef } from "react";
import { useForm, SubmitHandler, Path } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
	QuantityButton,
	QuantityButtonRef,
} from "@components/Buttons/QuantityButton";
import { InputForm } from "@components/Inputs/InputForm/InputForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Label } from "@components/Label";

import { AppLayout } from "@layouts/AppLayout";

import { adInputs } from "@mocks/adInputs";
import type { AdFormData } from "src/types";

import { Form, Fields, Quantity } from "./styles";
import { adSchema } from "src/schemas/ad.schema";

export const NewAdScreen = () => {
	const quantityRef = useRef<QuantityButtonRef>(null);
	const { handleSubmit, control } = useForm<AdFormData>({
		resolver: yupResolver(adSchema),
	});

	const onSubmit: SubmitHandler<AdFormData> = (data) => {
		const quantity = quantityRef.current?.currentQuantity || 1;

		console.log({ ...data, quantity });
	};

	return (
		<AppLayout>
			<Form>
				<Fields>
					{adInputs.map((input) => (
						<InputForm<AdFormData>
							{...input}
							key={input.id}
							name={input.id as Path<AdFormData>}
							control={control}
						/>
					))}

					<Quantity>
						<Label>Quantidade disponível</Label>
						<QuantityButton maxQuantity={100} ref={quantityRef} />
					</Quantity>
				</Fields>

				<MainButton onPress={handleSubmit(onSubmit)}>Finalizar</MainButton>
			</Form>
		</AppLayout>
	);
};

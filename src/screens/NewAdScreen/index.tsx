import { useRef } from "react";
import { useForm, SubmitHandler, Path } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import type { ImageSourcePropType } from "react-native";

import { setAdProduct } from "@redux/slices/ad.slice";

import {
	QuantityButton,
	QuantityButtonRef,
} from "@components/Buttons/QuantityButton";
import { KeyboardAvoidingWrapper } from "@components/KeyboardAvoidingWrapper";
import { InputForm } from "@components/Inputs/InputForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Label } from "@components/Label";

import { AppLayout } from "@layouts/AppLayout";

import { adSchema } from "src/schemas/ad.schema";
import { generateID } from "@utils/generateID";
import { adInputs } from "@mocks/adInputs";

import type { AdFormData, AdProductData } from "src/types";

import { Form, Fields, Quantity } from "./styles";

export const NewAdScreen = () => {
	const dispatch = useDispatch();
	const quantityRef = useRef<QuantityButtonRef>(null);
	const { handleSubmit, control } = useForm<AdFormData>({
		resolver: yupResolver(adSchema),
	});

	const onSubmit: SubmitHandler<AdFormData> = (data) => {
		const availableQuantity = quantityRef.current?.currentQuantity || 1;

		const product: AdProductData = {
			id: generateID(),
			name: data.name.trim(),
			description: data.description?.trim(),
			price: data.price.trim(),
			availableQuantity,
			sourceImage: data.sourceImage.trim() as ImageSourcePropType,
		};

		dispatch(setAdProduct(product));
	};

	return (
		<AppLayout>
			<KeyboardAvoidingWrapper>
				<Form>
					<Fields>
						{adInputs.map((input) => (
							<InputForm<AdFormData>
								{...input}
								key={input.id}
								name={input.id as Path<AdFormData>}
								control={control}
								accessibilityLabel={input.label}
							/>
						))}

						<Quantity>
							<Label>Quantidade disponível</Label>
							<QuantityButton maxQuantity={100} ref={quantityRef} />
						</Quantity>
					</Fields>

					<MainButton onPress={handleSubmit(onSubmit)}>Finalizar</MainButton>
				</Form>
			</KeyboardAvoidingWrapper>
		</AppLayout>
	);
};

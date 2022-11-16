import { useRef } from "react";
import { useForm, SubmitHandler, Path } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import type { ImageSourcePropType } from "react-native";

import { setAdProduct } from "@redux/slices/ad.slice";
import { showToast } from "@redux/slices/toast.slice";

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

	const handleProductCreation = (data: AdFormData) => {
		const availableQuantity = quantityRef.current?.currentQuantity || 1;

		const product: AdProductData = {
			id: generateID(),
			name: data.name.trim(),
			description: data.description?.trim(),
			price: data.price.trim(),
			availableQuantity,
			sourceImage: data.sourceImage.trim() as ImageSourcePropType,
		};

		return product;
	};

	const onSubmit: SubmitHandler<AdFormData> = (data) => {
		dispatch(setAdProduct(handleProductCreation(data)));
		dispatch(
			showToast({
				type: "success",
				iconName: "checkmark-sharp",
				message: "Anúncio concluído com sucesso!",
			})
		);
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

					<MainButton onPress={handleSubmit(onSubmit)}>Anunciar</MainButton>
				</Form>
			</KeyboardAvoidingWrapper>
		</AppLayout>
	);
};

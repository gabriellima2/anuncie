import { useForm, SubmitHandler } from "react-hook-form";
import { View } from "react-native";

import { QuantityButton } from "@components/Buttons/QuantityButton";
import { InputForm } from "@components/Inputs/InputForm/InputForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Label } from "@components/Label";

import { AppLayout } from "@layouts/AppLayout";

import { adInputs } from "@mocks/adInputs";
import type { AdFormData } from "src/types";

export const NewAd = () => {
	const { handleSubmit, control } = useForm<AdFormData>();

	const onSubmit: SubmitHandler<AdFormData> = (data) => {
		console.log(data);
	};

	return (
		<AppLayout>
			<View>
				{adInputs.map((input) => (
					<InputForm<AdFormData>
						key={input.id}
						name={input.id}
						label={input.label}
						control={control}
					/>
				))}

				<View>
					<Label>Quantidade disponível</Label>
					<QuantityButton maxQuantity={100} />
				</View>

				<MainButton onPress={handleSubmit(onSubmit)}>Finalizar</MainButton>
			</View>
		</AppLayout>
	);
};

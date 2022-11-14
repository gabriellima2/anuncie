import { Text, TextInputProps, View } from "react-native";
import { Control, FieldValues, useController, Path } from "react-hook-form";

import { Input } from "@components/Inputs/Input";
import { Label } from "@components/Label";

interface InputFormProps<TForm extends FieldValues> extends TextInputProps {
	name: Path<TForm>;
	label: string;
	control: Control<TForm, unknown>;
}

export const InputForm = <T extends FieldValues>({
	label,
	name,
	control,
	...props
}: InputFormProps<T>) => {
	const {
		field,
		formState: { errors },
	} = useController({
		control,
		name,
		rules: {
			required: {
				message: "Preecha!",
				value: true,
			},
		},
	});

	const fieldError = errors[field.name];

	return (
		<View>
			<Label>{label}</Label>
			<Input
				{...props}
				value={field.value}
				onChangeText={field.onChange}
				autoCorrect={false}
				autoCapitalize="none"
			/>
			{fieldError && <Text>{JSON.stringify(fieldError.message)}</Text>}
		</View>
	);
};

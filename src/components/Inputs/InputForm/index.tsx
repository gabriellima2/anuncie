import { Control, FieldValues, useController, Path } from "react-hook-form";

import { Input, InputProps } from "@components/Inputs/Input";
import { Label } from "@components/Label";

import { Container, Error } from "./styles";

interface InputFormProps<TForm extends FieldValues> extends InputProps {
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
	});

	const fieldError = errors[field.name];

	return (
		<Container>
			<Label>{label}</Label>
			<Input
				{...props}
				value={field.value}
				onChangeText={field.onChange}
				autoCorrect={false}
				autoCapitalize="none"
			/>
			{fieldError && (
				<Error accessible accessibilityRole="alert">
					{fieldError.message}
				</Error>
			)}
		</Container>
	);
};

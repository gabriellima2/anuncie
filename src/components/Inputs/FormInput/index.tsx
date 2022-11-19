import {
	Control,
	FieldValues,
	useController,
	Path,
	PathValue,
} from "react-hook-form";

import { Input, InputProps } from "@components/Inputs/Input";
import { Label } from "@components/Label";

import { Container, Error } from "./styles";

interface FormInputProps<TForm extends FieldValues>
	extends Omit<InputProps, "defaultValue"> {
	name: Path<TForm>;
	label: string;
	control: Control<TForm, unknown>;
	defaultValue?: PathValue<TForm, Path<TForm>> | undefined;
}

export const FormInput = <T extends FieldValues>({
	label,
	name,
	control,
	defaultValue,
	...props
}: FormInputProps<T>) => {
	const {
		field,
		formState: { errors },
	} = useController({
		control,
		name,
		defaultValue,
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

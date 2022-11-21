import { ViewProps } from "react-native";
import { Path, useForm, PathValue } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";

import { KeyboardAvoidingWrapper } from "@components/KeyboardAvoidingWrapper";
import { MainButton } from "@components/Buttons/MainButton";
import { FullContainer } from "@components/FullContainer";
import { FormInput } from "@components/Inputs/FormInput";

import type { IFields } from "@interfaces/IFields";

export interface BaseFormProps<TField extends {} = {}> extends ViewProps {
	fields: IFields<TField>[];
	yupSchema: AnyObjectSchema;
	onSubmit: (data: TField) => void;
	textButton: string;
}

export const BaseForm = <TField extends {} = {}>({
	fields,
	yupSchema,
	children,
	onSubmit,
	textButton,
	...props
}: BaseFormProps<TField>) => {
	const { handleSubmit, control } = useForm<TField>({
		resolver: yupResolver(yupSchema),
	});

	return (
		<KeyboardAvoidingWrapper>
			<FullContainer {...props}>
				<FullContainer>
					{fields.map((field, index) => (
						<FormInput<TField>
							{...field}
							key={index}
							defaultValue={
								field.defaultValue as PathValue<TField, Path<TField>>
							}
							name={field.id as Path<TField>}
							control={control}
							accessibilityLabel={field.label}
						/>
					))}
					{children}
				</FullContainer>

				<MainButton onPress={handleSubmit(onSubmit)} style={{ marginTop: 56 }}>
					{textButton}
				</MainButton>
			</FullContainer>
		</KeyboardAvoidingWrapper>
	);
};

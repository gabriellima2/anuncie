import styled, { css, useTheme } from "styled-components/native";
import type { TextInputProps } from "react-native";

export interface InputProps
	extends Omit<TextInputProps, "placeholderTextColor"> {}

const Container = styled.TextInput`
	${({ theme }) => css`
		padding: ${theme.spaces[2]} ${theme.spaces[3]};
		border-radius: 8px;

		font-family: ${theme.fonts.mainRegular};
		color: ${theme.colors.fonts.primary};
		font-size: 14px;

		background-color: ${theme.colors.utils.primary};
	`}
`;

export const Input = (props: InputProps) => {
	const { colors } = useTheme();

	return (
		<Container
			{...props}
			placeholderTextColor={`${colors.fonts.secondary}a1`}
		/>
	);
};

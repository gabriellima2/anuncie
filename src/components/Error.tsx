import styled, { css } from "styled-components/native";

import { Text } from "./Text";
import { AppLayout } from "@layouts/AppLayout";

interface ErrorProps {
	message: string;
}

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const Message = styled(Text.MediumPrimary)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[5]};
	`}
`;

export const Error = ({ message }: ErrorProps) => (
	<AppLayout>
		<Container>
			<Message>{message}</Message>
		</Container>
	</AppLayout>
);

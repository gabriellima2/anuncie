import { useTheme } from "styled-components/native";

import { LinkProps } from "@components/Link";
import { Icon } from "@components/Icon";

import { Container, Content, Value } from "./styles";

interface PageLinkProps extends LinkProps {
	icon: string;
	text: string;
}

export const PageLink = ({ icon, text, ...props }: PageLinkProps) => {
	const { colors } = useTheme();

	return (
		<Container {...props}>
			<Content>
				<Icon name={icon} size={24} color={colors.fonts.primary} />
				<Value>{text}</Value>
			</Content>
			<Icon name="chevron-forward" size={24} color={colors.fonts.secondary} />
		</Container>
	);
};

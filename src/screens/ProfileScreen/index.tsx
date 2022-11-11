import { ChangeThemeButton } from "@components/Buttons/ChangeThemeButton";
import { Copyright } from "@components/Copyright";
import { PageLink } from "@components/PageLink";
import { User } from "@components/User";

import { AppLayout } from "@layouts/AppLayout";

import { Container, Content, Links } from "./styles";

const links = [
	{ icon: "rocket-outline", text: "suas vendas" },
	{ icon: "checkmark-circle-outline", text: "suas compras" },
	{ icon: "settings-outline", text: "configurações" },
];

export const ProfileScreen = () => {
	return (
		<AppLayout>
			<Container>
				<Content>
					<User name="Gabriel" />
					<Links>
						{links.map((link, index) => (
							<PageLink {...link} key={index} />
						))}
					</Links>
					<ChangeThemeButton />
				</Content>

				<Copyright />
			</Container>
		</AppLayout>
	);
};

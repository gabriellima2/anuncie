import { Container, FakeImage, Name } from "./styles";

interface UserProps {
	name: string;
}

export const User = (props: UserProps) => (
	<Container>
		<FakeImage />
		<Name>{props.name}</Name>
	</Container>
);

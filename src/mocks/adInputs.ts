import { AdProductData } from "src/types";

interface Input {
	id: keyof AdProductData;
	label: string;
	placeholder?: string;
}

export const adInputs: Input[] = [
	{
		id: "sourceImage",
		label: "URL da Imagem",
		placeholder: "Ex: https://url-da-imagem.jpeg",
	},
	{ id: "name", label: "Título", placeholder: "Digite o título" },
	{
		id: "description",
		label: "Descrição",
		placeholder: "Digite a descrição",
	},
	{ id: "price", label: "Preço", placeholder: "Ex: 100,00" },
];

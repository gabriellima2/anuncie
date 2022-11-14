import { AdProductData } from "src/types";

interface Input {
	id: keyof AdProductData;
	label: string;
}

export const adInputs: Input[] = [
	{ id: "sourceImage", label: "URL da Imagem" },
	{ id: "name", label: "Título" },
	{ id: "description", label: "Descrição" },
	{ id: "price", label: "Preço" },
];

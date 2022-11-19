import type { IAdForm } from "@interfaces/IAdForm";
import type { IFields } from "@interfaces/IFields";

export const adFields: IFields<IAdForm>[] = [
	{
		id: "sourceImage",
		label: "URL da Imagem (PNG, JPG ou JPEG)",
		placeholder: "Ex: https://url-da-imagem.jpeg",
		keyboardType: "url",
	},
	{ id: "name", label: "Título", placeholder: "Digite o título" },
	{
		id: "description",
		label: "Descrição (Opcional)",
		placeholder: "Digite a descrição",
	},
	{
		id: "price",
		label: "Preço",
		placeholder: "Ex: 100,00",
		keyboardType: "numeric",
	},
];

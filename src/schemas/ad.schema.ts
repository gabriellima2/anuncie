import * as yup from "yup";

export const adSchema = yup.object().shape({
	name: yup.string().required("Preencha o campo de título"),
	description: yup.string(),
	sourceImage: yup
		.string()
		.matches(
			/(https?:\/\/.*\.(?:png|jpg|jpeg))/i,
			"Por favor, insira uma URL válida"
		)
		.required("Preecha o campo de URL da imagem"),
	price: yup
		.string()
		.matches(/^\$?\d+(,\d{3})*(\.\d*)?$/, "Por favor, digite uma valor válido")
		.required("Preencha o campo de preço"),
});

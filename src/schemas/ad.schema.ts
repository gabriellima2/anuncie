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
		.matches(
			/^[1-9]\d{0,2}(\.\d{3})*,\d{2}$/,
			"Por favor, digite uma valor válido"
		)
		.required("Preencha o campo de preço"),
});

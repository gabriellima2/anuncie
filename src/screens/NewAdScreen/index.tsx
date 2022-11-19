import { useDispatch } from "react-redux";

import { setAdProduct } from "@redux/slices/ad.slice";
import { showToast } from "@redux/slices/toast.slice";

import { AdForm } from "@components/Form/AdForm";

import { AppLayout } from "@layouts/AppLayout";

import { adFields } from "@mocks/adFields";
import { generateID } from "@utils/generateID";
import type { AdProductData, HandleAdProductData } from "src/types";

export const NewAdScreen = () => {
	const dispatch = useDispatch();

	const handleProductCreation = (data: HandleAdProductData) => {
		const product: AdProductData = {
			...data,
			id: generateID(),
			name: data.name.trim(),
			description: data.description?.trim(),
			price: data.price.trim(),
			sourceImage: data.sourceImage.trim(),
			soldBy: "Gabriel",
		};

		return product;
	};

	const onSubmit = (data: HandleAdProductData) => {
		dispatch(setAdProduct(handleProductCreation(data)));
		dispatch(
			showToast({
				type: "success",
				iconName: "checkmark-sharp",
				message: "Anúncio concluído com sucesso!",
			})
		);
	};

	return (
		<AppLayout>
			<AdForm fields={adFields} textButton="Finalizar" onSubmit={onSubmit} />
		</AppLayout>
	);
};

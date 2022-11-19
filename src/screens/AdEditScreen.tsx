import { useDispatch } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useProducts } from "@hooks/useProducts";

import { editAdProduct } from "@redux/slices/ad.slice";
import { showToast } from "@redux/slices/toast.slice";

import { AdForm } from "@components/Form/AdForm";

import { AppLayout } from "@layouts/AppLayout";

import { getSpecificProduct } from "@utils/getSpecificProduct";
import { adFields } from "@mocks/adFields";

import type { TStackParams } from "@globalTypes/TStack";
import type { IAdFormProductParams } from "@interfaces/IAdForm";

interface AdEditScreenProps
	extends NativeStackScreenProps<TStackParams, "AdEdit"> {}

export const AdEditScreen = (props: AdEditScreenProps) => {
	const products = useProducts();
	const dispatch = useDispatch();

	const id = props.route.params.id;
	const product = getSpecificProduct(products, id);

	const adFieldsFilled = adFields.map((field) => {
		return { ...field, defaultValue: product[field.id] };
	});

	const handleProductFormatting = (data: IAdFormProductParams) => {
		const product = {
			...data,
			name: data.name.trim(),
			description: data.description?.trim(),
			price: data.price.trim(),
			sourceImage: data.sourceImage.trim(),
		};

		return product;
	};

	const onSubmit = (data: IAdFormProductParams) => {
		dispatch(
			editAdProduct({ id, editedProduct: { ...handleProductFormatting(data) } })
		);
		dispatch(
			showToast({
				type: "success",
				iconName: "checkmark-sharp",
				message: "Anúncio editado com sucesso!",
			})
		);
	};

	return (
		<AppLayout>
			<AdForm
				fields={adFieldsFilled}
				initialQuantity={product.availableQuantity}
				textButton="Editar"
				onSubmit={onSubmit}
			/>
		</AppLayout>
	);
};

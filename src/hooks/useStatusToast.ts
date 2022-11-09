import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useCartSelect } from "../redux/slices/cart.slice";
import { showToast } from "../redux/slices/toast.slice";

export function useStatusToast() {
	const { status } = useCartSelect();
	const dispatch = useDispatch();

	useEffect(() => {
		if (status.hasError && status.message) {
			dispatch(
				showToast({
					type: "error",
					message: status.message,
					iconName: "checkmark-outline",
				})
			);
		}

		if (!status.hasError && status.message) {
			dispatch(
				showToast({
					type: "success",
					message: status.message,
					iconName: "checkmark-outline",
				})
			);
		}
	}, [status.hasError, status.message]);
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import type { ToastTypes } from "../../types";
import type { RootState } from "../store";

interface ToastState {
	isActive: boolean;
	type: ToastTypes;
	message: string;
	iconName: string;
	time: number;
}

interface ShowToastAction extends Omit<ToastState, "isActive"> {}

const initialState: ToastState = {
	isActive: false,
	type: "default",
	message: "",
	iconName: "",
	time: 2000,
};

export const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		showToast: (state, { payload }: PayloadAction<ShowToastAction>) => {
			state.isActive = true;
			state.type = payload.type;
			state.message = payload.message;
			state.iconName = payload.iconName;
			state.time = payload.time;
		},

		hideToast: (state) => {
			state.isActive = initialState.isActive;
			state.type = initialState.type;
			state.message = initialState.message;
			state.iconName = initialState.iconName;
			state.time = initialState.time;
		},
	},
});

export const useToastSelect = () =>
	useSelector((state: RootState) => state.toast);
export const { showToast, hideToast } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import type { RootState } from "@redux/store";
import type { IToast } from "@interfaces/IToast";

interface ToastState {
	isActive: boolean;
	type: keyof IToast;
	message: string;
	iconName: string;
	time?: number;
}

interface ShowToastAction extends Omit<ToastState, "isActive"> {}

const DEFAULT_TIME = 2000;

const initialState: ToastState = {
	isActive: false,
	type: "default",
	message: "",
	iconName: "",
	time: DEFAULT_TIME,
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
			state.time = payload.time || DEFAULT_TIME;
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

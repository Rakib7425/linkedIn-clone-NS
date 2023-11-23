import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
	name: "config",

	initialState: {
		isLoginSignupModelOpen: false,
		isSideModel_open: false,
	},

	reducers: {
		loginSignupModelOpen: (state) => {
			state.isLoginSignupModelOpen = !state.isLoginSignupModelOpen;
		},
		loginSignupModelClose: (state) => {
			state.isLoginSignupModelOpen = !state.isLoginSignupModelOpen;
		},

		sideModel_open: (state) => {
			state.isSideModel_open = !state.isSideModel_open;
		},

		sideModel_close: (state) => {
			state.isSideModel_open = !state.isSideModel_open;
		},
	},
});

export const { loginSignupModelOpen, loginSignupModelClose, sideModel_open, sideModel_close } =
	configSlice.actions;

export default configSlice.reducer;

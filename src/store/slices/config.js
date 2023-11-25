import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
	name: "config",

	initialState: {
		isLoginSignupModelOpen: false,
		isSideModel_open: false,
		searchText: null,
		searchedData: null,
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

		setSearchText: (state, action) => {
			state.searchText = action.payload;
		},

		setSearchedData: (state, action) => {
			state.searchedData = action.payload;
		},
	},
});

export const {
	loginSignupModelOpen,
	loginSignupModelClose,
	sideModel_open,
	sideModel_close,
	setSearchText,
	setSearchedData,
} = configSlice.actions;

export default configSlice.reducer;

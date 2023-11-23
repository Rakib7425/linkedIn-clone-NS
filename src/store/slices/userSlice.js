import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},

	reducers: {
		addUser: (state, actions) => {
			state.user = actions.payload;
			localStorage.setItem("linkedInUser", JSON.stringify(actions.payload));
		},
		removeUser: (state) => {
			state.user = null;
			localStorage.removeItem("linkedInUser");
		},
	},
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

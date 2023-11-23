import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
	name: "posts",
	initialState: {
		posts: null,
	},

	reducers: {
		addPosts: (state, actions) => {
			state.posts = actions.payload;
		},
	},
});

export const { addPosts } = postSlice.actions;

export default postSlice.reducer;

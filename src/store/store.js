import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import postsSlice from "./slices/postsSlice";
import configSlice from "./slices/config";

export const store = configureStore({
	reducer: {
		user: userSlice,
		posts: postsSlice,
		config: configSlice,
	},
});

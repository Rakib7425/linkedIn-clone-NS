import { toast } from "react-toastify";
import { createPostApi } from "../constent/apis";

export const createPost = async (post, file, userToken) => {
	try {
		const projectId = import.meta.env.PROJECT_ID;

		const formData = new FormData();
		formData.append("title", post?.post?.title);
		formData.append("content", post?.post?.content);
		formData.append("images", file);

		const response = await fetch(createPostApi, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${userToken}`,
				projectID: projectId,
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json();
		// console.log(result);
		if (result.status === "success") {
			toast.success(`Successfully created a post!`);
			// toast.success(result.message);
			return result;
		} else {
			toast.warn(`Error occurred to create a post!`);
			return false;
		}
	} catch (error) {
		toast.warn(`Error occurred to create a post!`);
		console.error("Error:", error);
		return error;
	}
};

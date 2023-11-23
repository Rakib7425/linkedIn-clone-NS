import { toast } from "react-toastify";
import { postCommentApi } from "../constent/apis";

export const postCommentHandler = async (postId, comment, userToken) => {
	console.log(postId, comment, userToken);
	// const pId = String(postId);

	const projectId = import.meta.env.PROJECT_ID;

	const response = await fetch(postCommentApi + postId, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${userToken}`,
			projectID: projectId,
		},

		body: {
			content: comment,
		},
	});
	const result = await response.json();

	console.log(result);

	if (result.status === "fail") {
		toast.warn(result.message);
		return false;
	} else {
		toast.success(result.message);
		return result;
	}
};

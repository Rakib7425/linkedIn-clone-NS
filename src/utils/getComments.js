import { getCommentsApi } from "../constent/apis";

const getComments = async (postId, userToken) => {
	const url = getCommentsApi + postId;

	let headersList = {
		projectID: import.meta.env.PROJECT_ID,

		Authorization: "Bearer " + userToken,
	};

	let response = await fetch(url, {
		method: "GET",
		headers: headersList,
	});

	let data = await response.json();

	console.log(data);
	return data;
};

export default getComments;

import { useEffect } from "react";
import { getPostsData } from "../constent/apis";
import { addPosts } from "../store/slices/postsSlice";
import { useDispatch } from "react-redux";

const useGetPosts = (setLoading) => {
	const dispatch = useDispatch();

	useEffect(() => {
		try {
			setLoading(true);
			const getPosts = async () => {
				const res = await fetch(getPostsData, {
					headers: {
						projectID: import.meta.env.PROJECT_ID,
					},
				});
				const result = await res.json();
				dispatch(addPosts(result?.data));
				setLoading(false);
			};

			getPosts();
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
		// eslint-disable-next-line
	}, []);
};

export default useGetPosts;

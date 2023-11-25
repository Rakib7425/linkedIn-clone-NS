import { useEffect, useState } from "react";
import useGetPosts from "../hooks/useGetPosts";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import Loader from "./loader/Loader";
import FeedCreatePost from "./FeedCreatePost";
import SearchContent from "../pages/SearchContent";

const Feed = () => {
	const [loading, setLoading] = useState(false);
	const searchText = useSelector((store) => store.config.searchText);
	// call the getPosts ApI
	useGetPosts(setLoading);

	const posts = useSelector((store) => store.posts.posts);

	useEffect(() => {
		// eslint-disable-next-line no-unused-vars
		const makeRevArray = () => {
			let newPosts = [...posts];
			const finalPosts = newPosts.reverse();
			console.log(finalPosts);
		};
		// makeRevArray();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <Loader />;
	return (
		<>
			<FeedCreatePost />
			{searchText?.length > 0 ? (
				<SearchContent />
			) : (
				posts && posts.map((post) => <PostCard key={post._id} post={post} />)
			)}
		</>
	);
};

export default Feed;

import { useSelector } from "react-redux";
import useSearch from "../hooks/useSearch";
import PostCard from "../components/PostCard";

const SearchContent = () => {
	const searchText = useSelector((store) => store.config.searchText);

	// use the HOOK
	useSearch(searchText);

	const fetchedData = useSelector((store) => store.config.searchedData);
	// console.log(fetchedData);

	if (!fetchedData?.data)
		return (
			<div className='noPost'>
				<h2 className='text-center text-red-400 text-3xl '>{fetchedData?.message}!</h2>
			</div>
		);

	return (
		<>
			{fetchedData?.data?.map((item) => (
				<div key={item._id}>
					<PostCard post={item} />
				</div>
			))}
		</>
	);
};

export default SearchContent;

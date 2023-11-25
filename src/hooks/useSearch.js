import { searchPostApi } from "../constent/apis";

import { useDispatch, useSelector } from "react-redux";
import { setSearchedData } from "../store/slices/config";
import { useEffect } from "react";

const useSearch = () => {
	const dispatch = useDispatch();
	const projectID = import.meta.env.PROJECT_ID;
	const searchText = useSelector((store) => store.config.searchText);

	const fetchData = async () => {
		try {
			const response = await fetch(`${searchPostApi}?search={"title":"${searchText}"}`, {
				headers: {
					projectID: projectID,
				},
			});

			const result = await response.json();
			dispatch(setSearchedData(result));
		} catch (error) {
			console.error("Error fetching searchedData:", error);
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchText]);
};

export default useSearch;

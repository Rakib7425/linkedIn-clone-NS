import { searchPostApi } from "../constent/apis";

import { useDispatch } from "react-redux";
import { setSearchedData } from "../store/slices/config";
import { useEffect } from "react";

const useSearch = (searchText) => {
	const dispatch = useDispatch();

	const fetchData = async () => {
		try {
			const response = await fetch(`${searchPostApi}?search={"title":"${searchText}"}`, {
				headers: {
					projectID: import.meta.env.PROJECT_ID,
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

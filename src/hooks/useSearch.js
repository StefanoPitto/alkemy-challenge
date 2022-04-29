import React, { useState } from "react";
import { foodApi } from "../api/FoodApi";

export const useSearch = () => {
	const [foodList, setFoodList] = useState();
	const [searchValue, setSearchValue] = useState();

	//Debounced search
	const debouncedSearch = (func) => {
		let timer;
		return (...args) => {
			const context = this;
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				timer = null;
				func.apply(context, args);
			}, 500);
		};
	};

	const handleChange = async (e) => {
		const { value } = e.target;
		value.length === 0 ? setSearchValue(undefined) : setSearchValue(value);
		if (foodList) setFoodList(undefined);
		if (value.length < 2) return;
		const response = await foodApi.get("/complexSearch", {
			params: {
				apiKey: process.env.REACT_APP_API_KEY,
				query: value,
				offset: 0,
				number: 10,
			},
		});
		setFoodList(response.data.results);
	};

	const callFunctions = debouncedSearch(handleChange);

	return { handleChange, foodList, callFunctions, searchValue };
};

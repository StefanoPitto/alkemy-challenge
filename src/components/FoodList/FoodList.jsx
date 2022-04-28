import React from "react";
import { ListContainer } from "./FoodListStyle";
import { FoodItem } from "../FoodItem/FoodItem";
export const FoodList = ({ data }) => {
	return (
		<ListContainer>
			{data && data.map((item) => <FoodItem key={item.id} item={item} />)}
		</ListContainer>
	);
};

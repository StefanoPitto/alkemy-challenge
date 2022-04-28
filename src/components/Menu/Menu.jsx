import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext/MenuContext";
import {
	InnerMenuContainer,
	MenuContainer,
	SearchContainer,
	StyledInput,
	InputContainer,
	StyledP,
	StyledDiv,
} from "./MenuStyle";
import { useSearch } from "../../hooks/useSearch";
import { FoodList } from "../FoodList/FoodList";
import { AiOutlineSearch } from "react-icons/ai";
import { Chip } from "@mui/material";

export const Menu = () => {
	const { foodList, callFunctions, searchValue } = useSearch();
	const { menu, healthScore, price, time } = useContext(MenuContext);
	return (
		<MenuContainer>
			<InnerMenuContainer>
				<h1>Create your Menu</h1>
				{menu && menu.length > 0 ? (
					<StyledDiv>
						{time > 0 && (
							<div>
								<Chip label={`Time to prepare: ${time} minutes`} />
							</div>
						)}
						{healthScore > 0 && (
							<div>
								<Chip label={`Health Score: ${healthScore}`} />
							</div>
						)}
						{price > 0 && (
							<div>
								<Chip label={`Price: ${price}`} />
							</div>
						)}
						{menu && <FoodList data={menu} />}
					</StyledDiv>
				) : (
					<StyledP>The menu is empty...</StyledP>
				)}
			</InnerMenuContainer>
			<SearchContainer>
				<InputContainer>
					<StyledInput onChange={callFunctions} placeholder="Search food..." />
					<AiOutlineSearch />
				</InputContainer>
				{foodList && <FoodList data={foodList} />}
				{searchValue &&
				searchValue.length > 0 &&
				foodList &&
				foodList.length <= 0 ? (
					<h1>No results found...</h1>
				) : (
					<></>
				)}
			</SearchContainer>
		</MenuContainer>
	);
};

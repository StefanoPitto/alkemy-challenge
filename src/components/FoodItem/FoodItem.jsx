import React from "react";
import {
	StyledDiv,
	StyledHeadline,
	ButtonContainer,
	StyledProgress,
} from "./FoodItemStyle";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";

export const FoodItem = ({ item }) => (
	<StyledDiv>
		{!item ? (
			<StyledProgress>
				<CircularProgress />
			</StyledProgress>
		) : (
			<>
				<>
					<img src={item.image} alt={item.titel} />
					<StyledHeadline>{item.title}</StyledHeadline>
				</>

				<ButtonContainer>
					<Link to={`/menu/${item.id}`}>
						<Button
							variant="contained"
							sx={{
								backgroundColor: "black",
							}}
						>
							More Info
						</Button>
					</Link>
				</ButtonContainer>
			</>
		)}
	</StyledDiv>
);

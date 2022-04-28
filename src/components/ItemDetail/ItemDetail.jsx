import React, { useContext, useState, useEffect } from "react";
import {
	StyledCard,
	StyledContent,
	Container,
	StyledChip,
	RemoveBtn,
	AddBtn,
	StyledProgressContainer,
} from "./ItemDetailStyle";
import { MenuContext } from "../../context/MenuContext/MenuContext";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useParams } from "react-router-dom";
import { foodApi } from "../../api/FoodApi";

export const ItemDetail = () => {
	const { menu, addItemMenu, removeItemMenu, error } = useContext(MenuContext);
	const [open, setOpen] = useState(false);
	const [itemInfo, setItemInfo] = useState();

	const { foodID } = useParams();

	const getDetailInfo = async () => {
		const response = await foodApi.get(`/${foodID}/information`);
		setItemInfo(response.data);
	};

	useEffect(() => {
		getDetailInfo();
	}, []);

	const getSummary = () => {
		let summary = itemInfo.summary;
		let array = summary.split(".");
		return `${array[0]}. ${array[1]}.`;
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<StyledCard>
			{!itemInfo ? (
				<StyledProgressContainer>
					<CircularProgress />
				</StyledProgressContainer>
			) : (
				<StyledContent>
					<img src={itemInfo.image} alt="" />

					<h1>{itemInfo.title}</h1>
					<p dangerouslySetInnerHTML={{ __html: `${getSummary()}` }} />
					<StyledChip label={`Health Score: ${itemInfo.healthScore}`} />
					<StyledChip
						label={`Time to prepare: ${itemInfo.readyInMinutes} minutes`}
					/>
					<StyledChip label={`Price: ${itemInfo.pricePerServing}`} />
					<Container>
						<div>
							{itemInfo.vegan && <StyledChip label="Vegan" />}
							{itemInfo.vegetarian && <StyledChip label="Vegetarian" />}
							{itemInfo.glutenFree && <StyledChip label="Gluten Free" />}
						</div>
						{!menu.find((item) => item.id === itemInfo.id) ? (
							<AddBtn
								variant="contained"
								onClick={() => {
									addItemMenu(itemInfo);
									setOpen(true);
								}}
							>
								Add to Menu
							</AddBtn>
						) : (
							<RemoveBtn
								variant="contained"
								onClick={() => {
									removeItemMenu(itemInfo);
									setOpen(true);
								}}
							>
								Remove
							</RemoveBtn>
						)}
					</Container>
				</StyledContent>
			)}
			<Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
				<Alert
					sx={{ zIndex: 999 }}
					severity={error.type}
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
				>
					{error.message}
				</Alert>
			</Snackbar>
		</StyledCard>
	);
};

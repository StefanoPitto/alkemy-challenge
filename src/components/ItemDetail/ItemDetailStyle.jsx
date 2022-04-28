import { Button, Card, CardContent, Chip } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
	max-width: 800px;
	min-height: 675px;
	color: #000000;
	margin: 0 auto;
	margin-top: 60px;
	@media (max-width: 1366px) {
		max-width: 500px;
		h1 {
			font-size: 20px;
		}
	}
`;

export const StyledChip = styled(Chip)`
	margin: 6px;
`;

export const StyledContent = styled(CardContent)`
	p {
		a {
			text-decoration: none;
			color: inherit;
		}
	}
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		@media (max-width: 1366px) {
			height: 200px;
		}
	}
`;

export const RemoveBtn = styled(Button)`
	background-color: #970b0b !important;
	color: #ffffff !important;
	font-weight: bold !important;
`;

export const AddBtn = styled(Button)`
	background-color: #089f3e !important;
	font-weight: bold !important;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledProgressContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
`;

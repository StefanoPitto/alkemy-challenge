import { Button } from "@mui/material";
import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	img {
		width: 350px;
		margin-bottom: 40px;
	}
	a {
		text-align: center;
		color: inherit;
		text-decoration: none;
	}
`;

export const StyledButton = styled(Button)``;

export const Footer = styled.div`
	text-align: center;
`;

export const InnerDiv = styled.div`
	h1 {
		font-size: 52px;
	}
	margin: 200px 0;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	@media (max-width: 1370px) {
		margin: 40px 0 50px 0;
	}
`;

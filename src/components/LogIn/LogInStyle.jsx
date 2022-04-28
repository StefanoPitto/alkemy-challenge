import styled from "styled-components";
import { Card } from "@mui/material";
export const StyledFormContainer = styled.div`
	text-align: center;
	padding: 20px;

	input {
		width: 300px;
		padding: 12px 20px;
		margin-bottom: 10px;
		border: 1px solid gray;
		border-radius: 100px;
		display: block;
		outline: none;
	}
	p {
		text-align: right;
		margin: 0 10px;
	}
`;

export const StyledContainer = styled(Card)`
	margin: 100px auto;
	padding: 30px 20px;
	max-width: 600px;
	height: 400px;
	form {
		margin: 0 auto;
		max-width: 350px;
		margin-top: 60px;
	}
`;

export const Button = styled.button`
	width: 342px;
	padding: 10px 16px;
	border-radius: 100px;
	background-color: black;
	border: none;
	color: #ffffff;
	border: 2px solid black;
	font-weight: bold;
	margin-bottom: 20px;
	&:hover {
		cursor: pointer;
		background-color: #ffffff;
		color: #000000;
	}
`;

export const StyledP = styled.p`
	text-decoration: underline;
	color: blue;
	&:hover {
		cursor: pointer;
	}
`;

export const WarningDiv = styled.div`
	color: red;
	text-align: left;
	padding: 0 16px;
	margin-bottom: 6px;
	svg {
		vertical-align: middle;
	}
`;

export const Loading = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
`;

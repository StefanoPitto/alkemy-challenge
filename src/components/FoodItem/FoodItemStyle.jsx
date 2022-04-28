import styled from "styled-components";

export const StyledDiv = styled.div`
	width: 240px;
	min-height: 250px;
	position: relative;
	border-radius: 30px;
	background: #e0e0e0;
	background-color: #f6f6f6;
	background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
	box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
	padding: 20px;
	margin: 10px;
	img {
		width: 100%;
		object-fit: contain;
	}
	svg {
		font-size: 28px;
		margin-right: 20px;
		margin-top: 10px;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const StyledHeadline = styled.p`
	text-align: left;
	margin-left: 6px;
	margin-top: 10px;
	font-size: 14px;
	height: 20px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	a {
		color: #ffffff;
		text-decoration: none;
	}
`;

export const StyledProgress = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
`;

import styled from "styled-components";

export const MenuContainer = styled.div``;

export const InnerMenuContainer = styled.div`
	padding: 20px;
	text-align: center;
	background-color: #d9d9d9;
	background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
	min-height: 300px;
`;

export const StyledP = styled.p`
	color: #8d8b8bb8;
	margin-top: 100px;
`;

export const SearchContainer = styled.div`
	text-align: center;
	padding: 60px;
`;

export const InputContainer = styled.div`
	margin: 0 auto;
	border: 1px solid gray;
	border-radius: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 500px;
	height: 40px;
	svg {
		margin-right: 20px;
	}
`;
export const StyledInput = styled.input`
	width: 400px;
	border: none;
	outline: none;
	background-color: transparent;
	padding: 0 20px;
`;

export const StyledButton = styled.div`
	display: inline;
	background-color: #3db30a;
	width: 100px;
	border-radius: 100px;
	height: 40px;
	line-height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: #ffffff;
	&:hover {
		cursor: pointer;
		background-color: #49d10e;
	}
`;

export const StyledDiv = styled.div`
	div {
		text-align: right;
		margin-right: 20px;
		margin-bottom: 10px;
	}
`;

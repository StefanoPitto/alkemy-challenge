import styled from "styled-components";

export const NavbarContainer = styled.div`
	background-color: #000000;
	color: #ffffff;
`;

export const InnerContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	a {
		text-decoration: none;
		color: inherit;
	}
	ul {
		list-style: none;
	}
	li {
		display: inline;
		margin: 10px;
	}
`;

import React from "react";
import {
	HomeContainer,
	Container,
	StyledButton,
	Footer,
	InnerDiv,
} from "./HomeStyle";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<HomeContainer>
			<InnerDiv>
				<h1>CREATE YOUR MENU!</h1>
				<Container>
					<img src="https://i.imgur.com/hBVGy6Z.png" alt="food-dish" />
					<Link to="/menu">
						<StyledButton variant="contained" sx={{ backgroundColor: "black" }}>
							Create menu
						</StyledButton>
					</Link>
				</Container>
			</InnerDiv>
			<Footer>
				<img
					src="https://www.alkemy.org/static/media/alkemyLogo.2daef856.svg"
					alt=""
				/>
			</Footer>
		</HomeContainer>
	);
};

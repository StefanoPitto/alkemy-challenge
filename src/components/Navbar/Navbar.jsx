import React from "react";
import { NavbarContainer, InnerContainer } from "./NavbarStyles";
import { Link } from "react-router-dom";
export const Navbar = () => {
	return (
		<NavbarContainer>
			<InnerContainer>
				<span>The Hotel</span>
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>

					<Link to="/menu">
						<li>Menu</li>
					</Link>
				</ul>
			</InnerContainer>
		</NavbarContainer>
	);
};

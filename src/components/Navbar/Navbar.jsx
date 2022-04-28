import React, { useContext } from "react";
import { NavbarContainer, InnerContainer } from "./NavbarStyles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
export const Navbar = () => {
	const { isLogged } = useContext(AuthContext);

	return (
		<NavbarContainer>
			{!isLogged ? (
				<InnerContainer>
					<span>The Hotel</span>
					<ul>
						<li>Home</li>

						<li>Menu</li>
					</ul>
				</InnerContainer>
			) : (
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
			)}
		</NavbarContainer>
	);
};

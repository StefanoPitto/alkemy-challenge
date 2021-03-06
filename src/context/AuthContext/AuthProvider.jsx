import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		navigate("/login");
		setTimeout(() => {
			if (localStorage.getItem("token")) {
				setIsLogged(true);
				navigate("/");
			}
			setLoading(false);
		}, 3000);
	}, []);

	const logIn = async (value) => {
		setLoading(true);
		let response;
		try {
			response = await axios.post("http://challenge-react.alkemy.org/", value);
			localStorage.setItem("token", JSON.stringify(response.data));
			navigate("/");
			setLoading(false);
		} catch {
			setLoading(false);
			Swal.fire({
				title: "Error!",
				text: "Wrong username or password",
				icon: "error",
				confirmButtonText: "Try Again",
			});
		}
	};

	return (
		<AuthContext.Provider value={{ logIn, loading, isLogged }}>
			{children}
		</AuthContext.Provider>
	);
};

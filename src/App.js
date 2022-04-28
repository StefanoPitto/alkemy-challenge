import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Menu } from "./components/Menu/Menu";
import { MenuProvider } from "./context/MenuContext/MenuProvider";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { LogIn } from "./components/LogIn/LogIn";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";

export function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<MenuProvider>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="/menu/:foodID" element={<ItemDetail />} />
					</Routes>
				</MenuProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

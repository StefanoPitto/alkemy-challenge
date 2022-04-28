import React, { useEffect, useState } from "react";
import { MenuContext } from "./MenuContext";

export const MenuProvider = ({ children }) => {
	const [error, setError] = useState({ type: "", message: "" });
	const [menu, setMenu] = useState([]);
	const [healthScore, setHealthScore] = useState(0);
	const [price, setPrice] = useState(0);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let array = JSON.parse(localStorage.getItem("menu"));
		if (!array) return;
		setMenu(array);
		updateHealthScore(array);
		updatePrice(array);
		updateTime(array);
	}, []);

	const addItemMenu = (item) => {
		let newArray = [...menu, item];
		console.log(
			!(item.vegan && validateVegan()) || !(!item.vegan && validateNotVegan())
		);
		if (
			!(item.vegan && validateVegan()) &&
			!(!item.vegan && validateNotVegan())
		)
			return setError({ type: "error", message: "Item cannot be added" });
		setMenu(newArray);
		updateHealthScore(newArray);
		updatePrice(newArray);
		updateTime(newArray);
		localStorage.setItem("menu", JSON.stringify(newArray));
		setError({ type: "success", message: "Item addded to Menu" });
	};

	const updateHealthScore = (array) => {
		let totalScore = array.reduce((previousValue, item) => {
			return previousValue + item.healthScore;
		}, 0);
		setHealthScore(parseFloat(totalScore / array.length).toFixed(2));
	};

	const updatePrice = (array) => {
		let totalPrice = array.reduce((previousValue, item) => {
			return previousValue + item.pricePerServing;
		}, 0);
		setPrice(totalPrice);
	};

	const updateTime = (array) => {
		let averageTime = array.reduce((previousValue, item) => {
			return previousValue + item.readyInMinutes;
		}, 0);
		setTime(parseFloat(averageTime / array.length));
	};

	const removeItemMenu = (item) => {
		console.log("remove", item);
		setMenu(menu.filter((element) => item.id !== element.id));
		setError({ type: "success", message: "Item removed from Menu" });
		localStorage.setItem("menu", JSON.stringify(menu));
	};

	const validateVegan = () => {
		let veganQty = 0;
		menu.forEach((food) => {
			if (food.vegan) veganQty++;
		});
		return veganQty < 2;
	};

	const validateNotVegan = () => {
		let notVeganQty = 0;
		menu.forEach((food) => {
			if (!food.vegan) notVeganQty++;
		});
		return notVeganQty < 2;
	};

	const updateLocalStorage = () => {
		localStorage.setItem("menu", JSON.stringify(menu));
	};

	return (
		<MenuContext.Provider
			value={{
				menu,
				addItemMenu,
				removeItemMenu,
				healthScore,
				error,
				price,
				time,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

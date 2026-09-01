import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
	const [productsInCart, setProductsInCart] = useState([]);
	const addProductToCart = (product) => {
		setProductsInCart([...productsInCart, product]);
	};
	console.log(productsInCart);
	return (
		<>
			<Navbar />
			<main>
				<Outlet context={{ productsInCart, addProductToCart }} />
			</main>
		</>
	);
}

export default App;

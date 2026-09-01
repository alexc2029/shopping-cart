import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
	const [productsInCart, setProductsInCart] = useState([]);
	const productsInCartCount = productsInCart.reduce(
		(total, product) => total + product.count,
		0,
	);
	const addProductToCart = (product) => {
		setProductsInCart([...productsInCart, product]);
	};
	console.log(productsInCart);
	return (
		<>
			<Navbar productsInCartCount={productsInCartCount} />
			<main>
				<Outlet context={{ productsInCart, addProductToCart }} />
			</main>
		</>
	);
}

export default App;

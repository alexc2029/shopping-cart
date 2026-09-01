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
		if (!productsInCart.some((p) => p.id === product.id))
			setProductsInCart([...productsInCart, product]);
		else {
			setProductsInCart(
				productsInCart.map((p) => {
					if (p.id === product.id)
						return { ...p, count: p.count + product.count };
					else return p;
				}),
			);
		}
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

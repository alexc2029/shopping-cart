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
		if (!isProductInCart(productsInCart, product))
			setProductsInCart([...productsInCart, product]);
		else {
			updateProductCount(
				setProductsInCart,
				productsInCart,
				product.id,
				product.count,
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

function updateProductCount(
	setProductsInCart,
	productsInCart,
	productId,
	count,
) {
	setProductsInCart(
		productsInCart.map((p) => {
			if (p.id === productId) return { ...p, count: p.count + count };
			else return p;
		}),
	);
}

function isProductInCart(productsInCart, product) {
	return productsInCart.some((p) => p.id === product.id);
}

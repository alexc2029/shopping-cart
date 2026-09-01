import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
	const [productsInCart, setProductsInCart] = useState([]);
	return (
		<>
			<Navbar />
			<main>
				<Outlet context={{ productsInCart, setProductsInCart }} />
			</main>
		</>
	);
}

export default App;

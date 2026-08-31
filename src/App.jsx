import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import useProducts from "./hooks/useProducts";

function App() {
	const { products, error, loading } = useProducts();
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;

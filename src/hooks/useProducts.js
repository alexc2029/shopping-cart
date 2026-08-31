import { useState, useEffect } from "react";

export default function useProducts() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => {
				if (!response.ok) throw new Error("API error");
				return response.json();
			})
			.then((response) => {
				setProducts(response);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { products, error, loading };
}

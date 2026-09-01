import ProductShopCard from "../components/ProductShopCard";
import useProducts from "../hooks/useProducts";

export default function Shop() {
	const { products, error, loading } = useProducts();
	if (loading) return <p>Loading...</p>;
	else if (error) return <p>Failed to load products.</p>;
	return products.map((product) => (
		<ProductShopCard
			title={product.title}
			price={product.price}
			imageUrl={product.image}
			key={product.id}
		/>
	));
}

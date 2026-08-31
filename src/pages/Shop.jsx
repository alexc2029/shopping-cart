import ProductShopCard from "../components/ProductShopCard";
import useProducts from "../hooks/useProducts";

export default function Shop() {
	const { products, error, loading } = useProducts();
	return products.map((product) => (
		<ProductShopCard
			title={product.title}
			price={product.price}
			image={product.image}
			key={product.id}
		/>
	));
}

import { useOutletContext } from "react-router";
import ProductCartCard from "../components/ProductCartCard";

export default function Cart() {
	const { productsInCart } = useOutletContext();
	return productsInCart.map((product) => (
		<ProductCartCard
			title={product.title}
			price={product.price}
			imageUrl={product.image}
			key={product.id}
		/>
	));
}

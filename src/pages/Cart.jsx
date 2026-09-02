import { useOutletContext } from "react-router";
import CartProduct from "../components/cart/CartProduct";

export default function Cart() {
	const { productsInCart } = useOutletContext();
	return productsInCart.map((product) => (
		<CartProduct
			title={product.title}
			price={product.price}
			imageUrl={product.image}
			key={product.id}
		/>
	));
}

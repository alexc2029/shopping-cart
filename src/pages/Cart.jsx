import { useOutletContext } from "react-router";
import CartProduct from "../components/cart/CartProduct";

export default function Cart() {
	const {
		productsInCart,
		updateProductCountFromCart,
		removeProductFromCart,
	} = useOutletContext();
	return productsInCart.map((product) => (
		<CartProduct
			title={product.title}
			price={product.price}
			imageUrl={product.image}
			count={product.count}
			onUpdateCount={(clickedCount) =>
				updateProductCountFromCart(product.id, clickedCount)
			}
			onDeleteFromCart={() => {
				removeProductFromCart(product.id);
			}}
			key={product.id}
		/>
	));
}

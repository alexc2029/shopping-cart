import { useOutletContext } from "react-router";
import CartProduct from "../components/cart/CartProduct";
import styled from "styled-components";

const CartLayout = styled.div`
	max-width: 800px;
	margin-inline: auto;
`;

const ProductsList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, max-content);
	align-items: center;
	justify-items: center;
	justify-content: start;
	gap: 1.5rem;
`;

export default function Cart() {
	const {
		productsInCart,
		updateProductCountFromCart,
		removeProductFromCart,
	} = useOutletContext();
	return (
		<CartLayout>
			<ProductsList>
				{productsInCart.map((product) => (
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
				))}
			</ProductsList>
		</CartLayout>
	);
}

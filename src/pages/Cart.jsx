import { useOutletContext } from "react-router";
import CartProduct from "../components/cart/CartProduct";
import styled from "styled-components";

const CartLayout = styled.div`
	width: fit-content;
	max-width: 800px;
	margin-inline: auto;
`;

const ProductsList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, max-content);
	align-items: center;
	justify-items: center;
	gap: 1.5rem;
`;

const Heading = styled.h1`
	font-size: 3rem;
	font-family: "PlayfairDisplay", Helvetica, sans-serif;
	text-align: center;
	margin-bottom: 2rem;
`;

const TotalWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	font-size: 1.5rem;
	margin: 1.5rem 0;
`;

const TotalLabel = styled.span`
	font-weight: 400;
	color: var(--color-muted);
`;

const TotalAmount = styled.span`
	font-weight: 500;
`;

const ConfirmOrder = styled.button`
	background-color: var(--color-accent);
	border-radius: 8px;
	color: white;
	border: none;
	width: 100%;
	padding: 12px 0;
	margin-bottom: 1.25rem;
	cursor: pointer;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: var(--color-hover);
	}
`;

const Disclaimer = styled.p`
	color: var(--color-muted);
	font-style: italic;
	text-align: center;
`;

export default function Cart() {
	const {
		productsInCart,
		updateProductCountFromCart,
		removeProductFromCart,
	} = useOutletContext();
	const totalPrice = productsInCart
		.reduce((acc, product) => acc + product.price * product.count, 0)
		.toFixed(2);
	return (
		<CartLayout>
			<Heading>Selection</Heading>
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
			<TotalWrapper>
				<TotalLabel>Grand Total</TotalLabel>
				<TotalAmount>${totalPrice}</TotalAmount>
			</TotalWrapper>
			<ConfirmOrder>Confirm Order</ConfirmOrder>
			<Disclaimer>
				Orders do not ship. Client-side state will reset upon tab
				closure.
			</Disclaimer>
		</CartLayout>
	);
}

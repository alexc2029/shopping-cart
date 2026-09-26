import { useOutletContext } from "react-router";
import CartProduct from "../components/cart/CartProduct";
import styled from "styled-components";
import CallToAction from "../components/CallToAction.styles";
import { Link } from "react-router";

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

const ConfirmOrder = styled(CallToAction)`
	width: 100%;
	margin-bottom: 1.25rem;
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
		emptyCart,
	} = useOutletContext();
	const totalPrice = productsInCart
		.reduce((acc, product) => acc + product.price * product.count, 0)
		.toFixed(2);
	return (
		<CartLayout>
			{productsInCart.length ? (
				<>
					<Heading>Selection</Heading>
					<ProductsList>
						{productsInCart.map((product) => (
							<CartProduct
								title={product.title}
								price={product.price}
								imageUrl={product.image}
								count={product.count}
								onUpdateCount={(clickedCount) =>
									updateProductCountFromCart(
										product.id,
										clickedCount,
									)
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
					<ConfirmOrder onClick={emptyCart}>
						Confirm Order
					</ConfirmOrder>
					<Disclaimer>
						Orders do not ship. Client-side state will reset upon
						tab closure.
					</Disclaimer>
				</>
			) : (
				<>
					<Heading
						style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
					>
						Selection Empty
					</Heading>
					<Disclaimer
						style={{ fontSize: "1.25rem", marginBottom: "1rem" }}
					>
						You have resisted the impulse to acquire imaginary
						objects.
					</Disclaimer>
					<CallToAction
						as={Link}
						to="/shop"
						style={{
							display: "block",
							marginInline: "auto",
							width: "fit-content",
							paddingInline: "28px",
						}}
					>
						Reconsider Your Restraint
					</CallToAction>
				</>
			)}
		</CartLayout>
	);
}

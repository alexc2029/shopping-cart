import styled from "styled-components";
import CardProductInfo from "./CartProductInfo";
import CartProductQuantity from "./CartProductQuantity";

const CartProductLayout = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

export default function CartProduct({
	title,
	price,
	imageUrl,
	count,
	onUpdateCount,
	onDeleteFromCart,
}) {
	return (
		<CartProductLayout>
			<CardProductInfo title={title} imageUrl={imageUrl} price={price} />
			<CartProductQuantity count={count} onUpdateCount={onUpdateCount} />
			<button onClick={onDeleteFromCart} aria-label="Remove from cart">
				Remove from cart
			</button>
		</CartProductLayout>
	);
}

import styled from "styled-components";
import CardProductInfo from "./CartProductInfo";
import CartProductQuantity from "./CartProductQuantity";
import { X } from "lucide-react";

const CartProductLayout = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

const XButton = styled.button`
	border: none;
	background-color: transparent;
	color: var(--color-muted);
	cursor: pointer;
	&:hover {
		color: var(--color-text);
	}
`;

const PriceAndXWrapper = styled.div`
	display: flex;
	align-items: center;
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
			<PriceAndXWrapper>
				<span>${price * count}</span>
				<XButton
					onClick={onDeleteFromCart}
					aria-label="Remove from cart"
				>
					<X />
				</XButton>
			</PriceAndXWrapper>
		</CartProductLayout>
	);
}

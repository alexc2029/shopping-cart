import styled from "styled-components";
import CardProductInfo from "./CartProductInfo";
import CartProductQuantity from "./CartProductQuantity";
import { X } from "lucide-react";

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
	justify-content: flex-end;
	justify-self: end;
	gap: 10px;
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
		<>
			<CardProductInfo title={title} imageUrl={imageUrl} price={price} />
			<CartProductQuantity count={count} onUpdateCount={onUpdateCount} />
			<PriceAndXWrapper>
				<span>${(price * count).toFixed(2)}</span>
				<XButton
					onClick={onDeleteFromCart}
					aria-label="Remove from cart"
				>
					<X />
				</XButton>
			</PriceAndXWrapper>
		</>
	);
}

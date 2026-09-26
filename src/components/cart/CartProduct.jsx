import styled from "styled-components";
import CardProductInfo from "./CartProductInfo";
import CartProductQuantity from "./CartProductQuantity";
import { X } from "lucide-react";

const XButton = styled.button`
	padding: 0;
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

const CartRow = styled.div`
	display: grid;
	grid-column: 1/-1;
	grid-template-columns: subgrid;
	align-items: center;

	border-bottom: 1px solid var(--color-border);
	padding-bottom: 1.5rem;

	&:last-child {
		border-bottom: 2px solid var(--color-muted);
	}
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
		<CartRow>
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
		</CartRow>
	);
}

import { useState } from "react";
import styled from "styled-components";

const StyledShopActions = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	margin-top: 10px;
`;

const CountInput = styled.input`
	width: 2rem;

	/* Firefox */
	appearance: textfield;
	-moz-appearance: textfield;

	/* Chrome, Safari, Edge, Opera */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const AddToCartButton = styled.button`
	background-color: var(--color-accent);
	color: white;
	border: none;
	border-radius: 8px;
	padding: 6px 12px;
`;

export default function ShopProductActions({ onAddToCart }) {
	const [count, setCount] = useState(1);
	const countAsNumber = Number(count);
	return (
		<StyledShopActions>
			<button
				onClick={() => {
					if (countAsNumber > 1) setCount(countAsNumber - 1);
				}}
			>
				-
			</button>
			<CountInput
				type="number"
				value={count}
				onChange={(e) => setCount(e.target.value)}
			/>
			<button onClick={() => setCount(countAsNumber + 1)}>+</button>

			<AddToCartButton onClick={() => onAddToCart(count)}>
				Add To Cart
			</AddToCartButton>
		</StyledShopActions>
	);
}

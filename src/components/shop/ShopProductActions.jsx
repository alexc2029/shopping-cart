import { useState } from "react";
import styled from "styled-components";

const StyledShopActions = styled.div`
	display: flex;
	justify-content: center;
	align-items: stretch;
	gap: 5px;
	margin-top: 10px;
`;

const CountInput = styled.input`
	width: 2rem;
	height: 100%;
	text-align: center;
	border: none;
	border-left: 1px solid var(--color-border);
	border-right: 1px solid var(--color-border);

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

const QuantityControls = styled.div`
	border: 1px solid var(--color-border);
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CountButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	color: var(--color-muted);
	&:hover {
		color: var(--color-text);
	}
`;
export default function ShopProductActions({ onAddToCart }) {
	const [count, setCount] = useState(1);
	const countAsNumber = Number(count);
	return (
		<StyledShopActions>
			<QuantityControls>
				<CountButton
					onClick={() => {
						if (countAsNumber > 1) setCount(countAsNumber - 1);
					}}
				>
					-
				</CountButton>
				<CountInput
					type="number"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<CountButton onClick={() => setCount(countAsNumber + 1)}>
					+
				</CountButton>
			</QuantityControls>

			<AddToCartButton onClick={() => onAddToCart(count)}>
				Add To Cart
			</AddToCartButton>
		</StyledShopActions>
	);
}

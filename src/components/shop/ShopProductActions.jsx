import { useState } from "react";
import styled from "styled-components";

const StyledShopActions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	margin-top: 10px;
`;

const StyledShopCount = styled.div``;

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

export default function ShopProductActions({ onAddToCart }) {
	const [count, setCount] = useState(1);
	const countAsNumber = Number(count);
	return (
		<StyledShopActions>
			<StyledShopCount>
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
			</StyledShopCount>
			<button onClick={() => onAddToCart(count)}>Add To Cart</button>
		</StyledShopActions>
	);
}

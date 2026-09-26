import { useState } from "react";
import styled from "styled-components";
import {
	QuantityControls,
	CountButton,
	CountInput,
} from "../QuantityControls.styles";
import CallToAction from "../CallToAction.styles";

const StyledShopActions = styled.div`
	display: flex;
	justify-content: center;
	align-items: stretch;
	gap: 5px;
	margin-top: 10px;
`;

const AddToCartButton = styled(CallToAction)`
	padding: 6px 12px;
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

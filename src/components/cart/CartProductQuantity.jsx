import {
	QuantityControls,
	CountButton,
	CountInput,
} from "../QuantityControls.styles";

export default function CartProductQuantity({ count, onUpdateCount }) {
	const countAsNumber = Number(count);
	return (
		<QuantityControls>
			<CountButton
				onClick={() => {
					if (countAsNumber > 1) onUpdateCount(-1);
				}}
			>
				-
			</CountButton>
			<CountInput as="div" data-testid="quantity-display">
				{count}
			</CountInput>
			<CountButton
				onClick={() => {
					onUpdateCount(1);
				}}
			>
				+
			</CountButton>
		</QuantityControls>
	);
}

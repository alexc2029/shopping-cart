import { useState } from "react";

export default function ShopProductActions({ onAddToCart }) {
	const [count, setCount] = useState(1);
	const countAsNumber = Number(count);
	return (
		<div>
			<input
				type="number"
				value={count}
				onChange={(e) => setCount(e.target.value)}
			/>
			<button onClick={() => setCount(countAsNumber + 1)}>+</button>
			<button
				onClick={() => {
					if (countAsNumber > 1) setCount(countAsNumber - 1);
				}}
			>
				-
			</button>
			<button onClick={() => onAddToCart(count)}>Add To Cart</button>
		</div>
	);
}

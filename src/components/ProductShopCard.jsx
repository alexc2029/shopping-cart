import { useState } from "react";

export default function ProductShopCard({ title, price, imageUrl }) {
	const [count, setCount] = useState(1);
	const countAsNumber = Number(count);
	return (
		<div>
			<img src={imageUrl} alt="" data-testid="product-image" />
			<h2>{title}</h2>
			<span>${price}</span>
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
			<button>Add To Cart</button>
		</div>
	);
}

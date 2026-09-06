export default function CartProductQuantity({ count, onUpdateCount }) {
	const countAsNumber = Number(count);
	return (
		<div>
			<button
				onClick={() => {
					if (countAsNumber > 1) onUpdateCount(-1);
				}}
			>
				-
			</button>
			<div>{count}</div>
			<button
				onClick={() => {
					onUpdateCount(1);
				}}
			>
				+
			</button>
		</div>
	);
}

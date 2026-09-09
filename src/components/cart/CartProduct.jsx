import CardProductInfo from "./CartProductInfo";
import CartProductQuantity from "./CartProductQuantity";

export default function CartProduct({
	title,
	price,
	imageUrl,
	count,
	onUpdateCount,
	onDeleteFromCart,
}) {
	return (
		<div>
			<CardProductInfo title={title} imageUrl={imageUrl} price={price} />
			<CartProductQuantity count={count} onUpdateCount={onUpdateCount} />
			<button onClick={onDeleteFromCart} aria-label="Remove from cart">
				Remove from cart
			</button>
		</div>
	);
}

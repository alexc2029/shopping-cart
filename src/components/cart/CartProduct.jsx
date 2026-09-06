import CardProductInfo from "./CartProductInfo";
import CartProductQuantity from "./CartProductQuantity";

export default function CartProduct({
	title,
	price,
	imageUrl,
	count,
	onUpdateCount,
}) {
	return (
		<div>
			<CardProductInfo title={title} imageUrl={imageUrl} price={price} />
			<CartProductQuantity count={count} onUpdateCount={onUpdateCount} />
		</div>
	);
}

import ProductShopCardActions from "./ProductShopCardActions";
import ProductShopCardInfo from "./ProductShopCardInfo";

export default function ProductShopCard({
	title,
	price,
	imageUrl,
	onAddToCart,
}) {
	return (
		<div>
			<ProductShopCardActions onAddToCart={onAddToCart} />
			<ProductShopCardInfo
				title={title}
				imageUrl={imageUrl}
				price={price}
			/>
		</div>
	);
}

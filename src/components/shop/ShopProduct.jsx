import ShopProductActions from "./ShopProductActions";
import ShopProductInfo from "./ShopProductInfo";

export default function ShopProduct({ title, price, imageUrl, onAddToCart }) {
	return (
		<div>
			<ShopProductActions onAddToCart={onAddToCart} />
			<ShopProductInfo title={title} imageUrl={imageUrl} price={price} />
		</div>
	);
}

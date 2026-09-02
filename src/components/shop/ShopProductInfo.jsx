export default function ShopProductInfo({ title, imageUrl, price }) {
	return (
		<div>
			<img src={imageUrl} alt="" data-testid="product-image" />
			<h2>{title}</h2>
			<span>${price}</span>
		</div>
	);
}

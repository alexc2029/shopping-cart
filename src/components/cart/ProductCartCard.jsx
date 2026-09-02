import ProductCartCardInfo from "./ProductCartCardInfo";

export default function ProductCartCard({ title, price, imageUrl }) {
	return (
		<ProductCartCardInfo title={title} imageUrl={imageUrl} price={price} />
	);
}

import CardProductInfo from "./CartProductInfo";

export default function CartProduct({ title, price, imageUrl }) {
	return <CardProductInfo title={title} imageUrl={imageUrl} price={price} />;
}

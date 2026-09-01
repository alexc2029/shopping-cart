export default function ProductShopCard({ title, price, imageUrl }) {
	return (
		<div>
			<img src={imageUrl} alt="" />
			<h2>{title}</h2>
			<span>${price}</span>
			<input type="number" />
			<button>+</button>
			<button>-</button>
			<button>Add To Cart</button>
		</div>
	);
}

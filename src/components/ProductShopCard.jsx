export default function ProductShopCard({ title, price, image }) {
	return (
		<div>
			<img src={image} alt="" />
			<h2>{title}</h2>
			<span>${price}</span>
			<input type="number" />
			<button>+</button>
			<button>-</button>
			<button>Add To Cart</button>
		</div>
	);
}

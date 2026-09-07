import { Link } from "react-router";

export default function Home() {
	return (
		<>
			<h1>Welcome to Unknown Shop</h1>
			<Link to="/shop">Shop Now</Link>
		</>
	);
}

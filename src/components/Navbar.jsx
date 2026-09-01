import { NavLink } from "react-router";

export default function Navbar({ productsInCartCount }) {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/shop">{productsInCartCount}Shop</NavLink>
			<NavLink to="/cart">Cart</NavLink>
		</nav>
	);
}

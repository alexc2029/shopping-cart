import { NavLink } from "react-router";

export default function Navbar({ productsInCartCount }) {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/shop">
				{productsInCartCount > 0 && (
					<span
						aria-label={`${productsInCartCount} products in cart`}
						data-testid="cart-badge"
					>
						{productsInCartCount}
					</span>
				)}
				Shop
			</NavLink>
			<NavLink to="/cart">Cart</NavLink>
		</nav>
	);
}

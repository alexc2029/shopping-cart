import { NavLink, Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
`;

const NavLinksWrapper = styled.div`
	display: flex;
	gap: 1rem;
`;

export default function Navbar({ productsInCartCount }) {
	return (
		<StyledNav>
			<Link to="/">Lorem & Ipsum Co.</Link>
			<NavLinksWrapper>
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
			</NavLinksWrapper>
		</StyledNav>
	);
}

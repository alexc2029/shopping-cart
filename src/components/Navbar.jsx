import { NavLink, Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex;
	gap: 1rem;
	border-bottom: 1px solid var(--color-border);
	align-items: baseline;
`;

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: var(--color-muted);
	&:hover,
	&:active {
		color: var(--color-text);
	}
	&.active {
		color: var(--color-accent);
	}
`;

const StyledNameLink = styled(Link)`
	text-decoration: none;
	color: var(--color-text);
	font-family: "PlayfairDisplay", Helvetica, sans-serif;
	font-size: 30px;
	margin-right: auto;
`;

const Ampersand = styled.span`
	font-family: Georgia, Helvetica, sans-serif;
`;

export default function Navbar({ productsInCartCount }) {
	return (
		<StyledNav>
			<StyledNameLink to="/">
				Lorem <Ampersand>&</Ampersand> Ipsum Co.
			</StyledNameLink>
			<StyledNavLink to="/">Home</StyledNavLink>
			<StyledNavLink to="/shop">
				{productsInCartCount > 0 && (
					<span
						aria-label={`${productsInCartCount} products in cart`}
						data-testid="cart-badge"
					>
						{productsInCartCount}
					</span>
				)}
				Shop
			</StyledNavLink>
			<StyledNavLink to="/cart">Cart</StyledNavLink>
		</StyledNav>
	);
}

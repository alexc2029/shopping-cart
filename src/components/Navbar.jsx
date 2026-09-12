import { NavLink, Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid var(--color-border);
`;

const NavLinksWrapper = styled.div`
	display: flex;
	gap: 1rem;
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
			<NavLinksWrapper>
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
			</NavLinksWrapper>
		</StyledNav>
	);
}

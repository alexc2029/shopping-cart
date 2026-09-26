import { Link } from "react-router";
import styled from "styled-components";
import CallToAction from "../components/CallToAction.styles";

const Ampersand = styled.span`
	font-family: Georgia, Helvetica, sans-serif;
`;

const StyledHeading1 = styled.h1`
	font-size: 4rem;
	font-family: "PlayfairDisplay", Helvetica, sans-serif;
`;

const StyledHeading2 = styled.h2`
	color: var(--color-muted);
	font-weight: normal;
`;

const CallToActionLink = styled(CallToAction)`
	padding-inline: 28px;
`;

const HomeLayout = styled.div`
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

export default function Home() {
	return (
		<HomeLayout>
			<StyledHeading1>
				Welcome to Lorem <Ampersand>&</Ampersand> Ipsum Co.
			</StyledHeading1>
			<StyledHeading2>
				An exquisite collection of products that will never arrive,
				charge your card, or take up closet space.
			</StyledHeading2>
			<CallToActionLink as={Link} to="/shop">
				Browse the Catalog
			</CallToActionLink>
		</HomeLayout>
	);
}

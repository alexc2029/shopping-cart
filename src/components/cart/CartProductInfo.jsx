import styled from "styled-components";

const StyledProductInfo = styled.div`
	display: flex;
	gap: 30px;
	& img {
		height: 80px;
		width: 80px;
	}
`;

const TitleAndPrice = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;
`;

const Title = styled.h2`
	font-weight: normal;
	letter-spacing: 0.5px;
	font-size: 1.2rem;
`;

export default function CardProductInfo({ title, imageUrl, price }) {
	return (
		<StyledProductInfo>
			<img src={imageUrl} alt="" data-testid="product-image" />
			<TitleAndPrice>
				<Title>{title}</Title>
				<span>${price.toFixed(2)}</span>
			</TitleAndPrice>
		</StyledProductInfo>
	);
}

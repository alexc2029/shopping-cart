import styled from "styled-components";

const StyledProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	& img {
		max-width: 100%;
		height: 30vh;
	}
`;

const ProductTitle = styled.h2`
	font-weight: 500;
	letter-spacing: 0.5px;
`;

const Price = styled.span`
	color: var(--color-muted);
`;

export default function ShopProductInfo({ title, imageUrl, price }) {
	return (
		<StyledProductInfo>
			<img src={imageUrl} alt="" data-testid="product-image" />
			<ProductTitle>{title}</ProductTitle>
			<Price>${price.toFixed(2)}</Price>
		</StyledProductInfo>
	);
}

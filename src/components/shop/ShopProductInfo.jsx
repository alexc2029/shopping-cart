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

export default function ShopProductInfo({ title, imageUrl, price }) {
	return (
		<StyledProductInfo>
			<img src={imageUrl} alt="" data-testid="product-image" />
			<h2>{title}</h2>
			<span>${price}</span>
		</StyledProductInfo>
	);
}

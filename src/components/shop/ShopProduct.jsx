import styled from "styled-components";
import ShopProductActions from "./ShopProductActions";
import ShopProductInfo from "./ShopProductInfo";

const StyledShopProduct = styled.div`
	background-color: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: 8px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&:hover img {
		transform: scale(1.04);
	}
`;

export default function ShopProduct({ title, price, imageUrl, onAddToCart }) {
	return (
		<StyledShopProduct>
			<ShopProductInfo title={title} imageUrl={imageUrl} price={price} />
			<ShopProductActions onAddToCart={onAddToCart} />
		</StyledShopProduct>
	);
}

import styled from "styled-components";
import ShopProduct from "../components/shop/ShopProduct";
import useProducts from "../hooks/useProducts";
import { useOutletContext } from "react-router";

const ShopLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 3vw;
	margin-top: 3rem;
`;

export default function Shop() {
	const { products, error, loading } = useProducts();
	const { addProductToCart } = useOutletContext();
	if (loading) return <p>Loading...</p>;
	else if (error) return <p>Failed to load products.</p>;
	return (
		<ShopLayout>
			{products.map((product) => (
				<ShopProduct
					title={product.title}
					price={product.price}
					imageUrl={product.image}
					key={product.id}
					onAddToCart={(count) =>
						addProductToCart({ ...product, count: count })
					}
				/>
			))}
		</ShopLayout>
	);
}

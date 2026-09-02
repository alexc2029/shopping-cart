import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductShopCard from "./ShopProduct";

describe("ProductShopCard tests", () => {
	it("renders product", () => {
		const mockProps = {
			title: "Backpack",
			price: "19",
			imageUrl: "http://example.com",
		};
		render(
			<ProductShopCard
				title={mockProps.title}
				price={mockProps.price}
				imageUrl={mockProps.imageUrl}
			/>,
		);

		expect(screen.getByText(mockProps.title)).toBeInTheDocument();
		expect(screen.getByText(`$${mockProps.price}`)).toBeInTheDocument();
		expect(screen.getByTestId("product-image")).toHaveAttribute(
			"src",
			mockProps.imageUrl,
		);
	});
});

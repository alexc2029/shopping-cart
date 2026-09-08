import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ShopProduct from "./ShopProduct";
import userEvent from "@testing-library/user-event";

describe("ShopProduct tests", () => {
	it("renders product info", () => {
		const mockProps = {
			title: "Backpack",
			price: "19",
			imageUrl: "http://example.com",
		};
		render(
			<ShopProduct
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
	it("renders quantity controls", () => {
		render(<ShopProduct onAddToCart={() => {}} />);

		expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
		expect(screen.getByRole("spinbutton")).toHaveDisplayValue(1);
	});
	it("increments and decrements quantity through + and - buttons", async () => {
		render(<ShopProduct onAddToCart={() => {}} />);
		const user = userEvent.setup();
		const plusButton = screen.getByRole("button", { name: "+" });
		const minusButton = screen.getByRole("button", { name: "-" });
		const quantityInput = screen.getByRole("spinbutton");

		await user.click(plusButton);

		expect(quantityInput).toHaveDisplayValue(2);

		await user.click(minusButton);

		expect(quantityInput).toHaveDisplayValue(1);
	});
	it("renders add to cart button", () => {
		render(<ShopProduct onAddToCart={() => {}} />);

		expect(
			screen.getByRole("button", { name: "Add To Cart" }),
		).toBeInTheDocument();
	});
	it("calls functionality on add to cart click", async () => {
		const stubAddToCart = vi.fn();
		render(<ShopProduct onAddToCart={stubAddToCart} />);
		const user = userEvent.setup();
		const addToCartButton = screen.getByRole("button", {
			name: "Add To Cart",
		});

		await user.click(addToCartButton);
		expect(stubAddToCart).toHaveBeenCalled();
	});
	///todo: should I test the manual input editing? it's controlled but it's still just an input
});

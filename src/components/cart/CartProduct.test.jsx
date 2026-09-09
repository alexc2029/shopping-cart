import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CartProduct from "./CartProduct";
import { useState } from "react";

describe("CartProduct tests", () => {
	it("renders product info", () => {
		const mockProps = {
			title: "Backpack",
			price: "19",
			imageUrl: "http://example.com",
		};
		render(
			<CartProduct
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
	it("displays product quantity", () => {
		render(<CartProduct count="3" />);

		expect(screen.getByTestId("quantity-display")).toHaveTextContent(3);
	});
	function QuantityWrapper() {
		const [count, setCount] = useState(1);

		const updateCount = (clickedCount) => {
			setCount(count + clickedCount);
		};

		return <CartProduct count={count} onUpdateCount={updateCount} />;
	}
	it("increments and decrements quantity through + and - buttons", async () => {
		render(<QuantityWrapper />);
		const user = userEvent.setup();
		const plusButton = screen.getByRole("button", { name: "+" });
		const minusButton = screen.getByRole("button", { name: "-" });
		const quantityDisplay = screen.getByTestId("quantity-display");

		await user.click(plusButton);

		expect(quantityDisplay).toHaveTextContent(2);

		await user.click(minusButton);

		expect(quantityDisplay).toHaveTextContent(1);
	});
	it("calls functionality on delete from cart click", async () => {
		const onDeleteFromCart = vi.fn();
		render(<CartProduct onDeleteFromCart={onDeleteFromCart} />);
		const user = userEvent.setup();
		const removeFromCartButton = screen.getByRole("button", {
			name: "Remove from cart",
		});

		await user.click(removeFromCartButton);

		expect(onDeleteFromCart).toHaveBeenCalled();
	});
});

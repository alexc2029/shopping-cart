import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { createMemoryRouter, RouterProvider, Outlet } from "react-router";
import Cart from "./Cart";
import userEvent from "@testing-library/user-event";

const mockProducts = [
	{
		title: "Backpack",
		price: 20.12,
		imageUrl: "http://example.com",
		count: 1,
	},
	{
		title: "Shoes",
		price: 40.2,
		imageUrl: "http://example.com",
		count: 2,
	},
];

function renderCartWithContext(customContext = {}) {
	const defaultContext = {
		productsInCart: [],
		updateProductCountFromCart: vi.fn(),
		removeProductFromCart: vi.fn(),
		emptyCart: vi.fn(),
	};

	const contextValue = { ...defaultContext, ...customContext };

	const routes = [
		{
			element: <Outlet context={contextValue} />,
			children: [
				{
					path: "/cart",
					element: <Cart />,
				},
			],
		},
	];

	const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });

	return render(<RouterProvider router={router} />);
}

describe("Cart tests", () => {
	it("renders empty cart state and provides link to browse products", () => {
		renderCartWithContext();

		expect(
			screen.getByRole("heading", { name: /empty/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("link", { name: /reconsider/i }),
		).toHaveAttribute("href", "/shop");

		expect(
			screen.queryByRole("button", { name: /confirm order/i }),
		).not.toBeInTheDocument();
	});
	it("renders heading without empty label when not empty", () => {
		renderCartWithContext({
			productsInCart: mockProducts,
		});
		expect(
			screen.getByRole("heading", { name: "Selection" }),
		).toBeInTheDocument();
	});
	it("renders confirm order button with callback", async () => {
		const mockEmptyCart = vi.fn();
		renderCartWithContext({
			productsInCart: mockProducts,
			emptyCart: mockEmptyCart,
		});

		const confirmOrderButton = screen.getByRole("button", {
			name: /confirm order/i,
		});

		expect(
			screen.queryByRole("heading", { name: /empty/i }),
		).not.toBeInTheDocument();

		const user = userEvent.setup();

		await user.click(confirmOrderButton);

		expect(mockEmptyCart).toHaveBeenCalled();
	});
});

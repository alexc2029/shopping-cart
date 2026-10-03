import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { createMemoryRouter, RouterProvider, Outlet } from "react-router";
import Cart from "./Cart";


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
});

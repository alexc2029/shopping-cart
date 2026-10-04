import { describe, it, test, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "./routes";
import { createMemoryRouter, RouterProvider } from "react-router";

export function renderShop() {
	const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
	render(<RouterProvider router={router} />);
}

describe("App integration tests", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	test("Cart badge reacts correctly to adding to cart", async () => {
		vi.spyOn(global, "fetch").mockResolvedValue({
			ok: true,
			json: async () => [{ id: 1, title: "Backpack" }],
		});
		const user = userEvent.setup();

		renderShop();
		const addToCartButton = await screen.findByRole("button", {
			name: "Add To Cart",
		});
		const plusButton = await screen.findByRole("button", { name: "+" });

		expect(screen.queryByTestId("cart-badge")).not.toBeInTheDocument();
		await user.click(plusButton);
		await user.click(plusButton);
		await user.click(addToCartButton);

		expect(await screen.findByTestId("cart-badge")).toHaveTextContent("3");
	});
});

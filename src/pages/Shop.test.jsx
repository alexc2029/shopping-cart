import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import routes from "../routes";
import { createMemoryRouter, RouterProvider } from "react-router";

function renderShop() {
	const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
	render(<RouterProvider router={router} />);
}

describe("Shop tests", () => {
	it("should render in a loading state", () => {
		renderShop();
		const loadingElement = screen.getByText("Loading...");
		expect(loadingElement).toBeInTheDocument();
	});
	it("shows loaded products", async () => {
		global.fetch = vi.fn().mockResolvedValue({
			ok: true,
			json: async () => [
				{ id: 1, title: "Backpack" },
				{ id: 2, title: "Shirt" },
			],
		});

		renderShop();

		expect(await screen.findByText("Backpack")).toBeInTheDocument();
		expect(await screen.findByText("Shirt")).toBeInTheDocument();

		const loadingElement = screen.queryByText("Loading...");
		expect(loadingElement).not.toBeInTheDocument();
	});
	it("displays error", async () => {
		global.fetch = vi.fn().mockResolvedValue({
			ok: false,
			status: 402,
		});

		renderShop();

		expect(
			await screen.findByText("Failed to load products."),
		).toBeInTheDocument();
	});
});

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import routes from "../routes";
import { createMemoryRouter, RouterProvider } from "react-router";

describe("Shop tests", () => {
	const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
	it("should render in a loading state", () => {
		render(<RouterProvider router={router} />);
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

		render(<RouterProvider router={router} />);

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

		render(<RouterProvider router={router} />);

		expect(
			await screen.findByText("Failed to load products."),
		).toBeInTheDocument();
	});
});

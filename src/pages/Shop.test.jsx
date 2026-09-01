import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Shop from "./Shop";

describe("Shop tests", () => {
	it("should render in a loading state", () => {
		render(<Shop />);
		const loadingElement = screen.queryByText("Loading...");
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

		render(<Shop />);

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

		render(<Shop />);

		expect(
			await screen.findByText("Failed to load products."),
		).toBeInTheDocument();
	});
});

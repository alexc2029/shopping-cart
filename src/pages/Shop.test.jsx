import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Shop from "./Shop";
import useProducts from "../hooks/useProducts";

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
		///is it fine that this is actually testing a child component?
		expect(await screen.findByText("Shirt")).toBeInTheDocument();

		const loadingElement = screen.queryByText("Loading...");
		expect(loadingElement).not.toBeInTheDocument();
	});
});

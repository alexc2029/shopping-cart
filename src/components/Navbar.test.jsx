import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Navbar tests", () => {
	it("renders home link with correct href", () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>,
		);
		expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
			"href",
			"/",
		);
	});
	it("renders shop link with correct href", () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>,
		);
		expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
			"href",
			"/shop",
		);
	});
	it("renders cart link with correct href", () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>,
		);
		expect(screen.getByRole("link", { name: "Cart" })).toHaveAttribute(
			"href",
			"/cart",
		);
	});
	it("doesn't show product count badge for empty cart", () => {
		render(
			<MemoryRouter>
				<Navbar productsInCartCount={0} />
			</MemoryRouter>,
		);
		expect(screen.queryByTestId("cart-badge")).not.toBeInTheDocument();
	});
	it("shows product count badge when there are products in cart", () => {
		render(
			<MemoryRouter>
				<Navbar productsInCartCount={3} />
			</MemoryRouter>,
		);
		expect(screen.getByTestId("cart-badge")).toHaveTextContent("3");
	});
});

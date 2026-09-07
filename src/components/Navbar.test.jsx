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
});

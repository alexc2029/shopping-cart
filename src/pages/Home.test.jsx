import { describe, expect, it } from "vitest";
import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Home page tests", () => {
	it("renders shop link with correct href", () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>,
		);
		expect(screen.getByRole("link", { name: "Shop Now" })).toHaveAttribute(
			"href",
			"/shop",
		);
	});
});

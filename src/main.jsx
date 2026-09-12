import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import routes from "./routes";
import { GlobalStyles } from "./theme/theme";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GlobalStyles />
		<RouterProvider router={router} />
	</StrictMode>,
);

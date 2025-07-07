import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import CartProvider from "./providers/CartProvider.tsx";
import { router } from "./routes/Routes.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</StrictMode>
);

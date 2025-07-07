import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/home";
import ProductDetails from "../pages/product-details";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "products/:id",
				element: <ProductDetails />,
			},
		],
	},
]);

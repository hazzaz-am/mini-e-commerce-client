import { useEffect, useReducer } from "react";
import { CartContext } from "../contexts";
import { cartReducer, initialState } from "../reducers/cartReducer";

export default function CartProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("http://localhost:8000/products");
			const data = await res.json();
			dispatch({ type: "SET_PRODUCTS", payload: data });
		};
		fetchProducts();
	}, []);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}

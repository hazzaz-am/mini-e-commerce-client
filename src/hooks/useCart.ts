import { useContext } from "react";
import { CartContext } from "../contexts";

export default function useCart() {
	return useContext(CartContext);
}

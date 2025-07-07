import useCart from "../../../hooks/useCart";
import type { TCartItem } from "../../../types";

type CartItemProps = {
	item: TCartItem;
};

export default function CartItem({ item }: CartItemProps) {
	const cartState = useCart();
	return (
		<div className="flex justify-between items-center mb-6">
			<div>
				<div className="font-semibold">{item.title}</div>
				<div className="text-gray-500 text-sm">
					${item.price} x {item.quantity}
				</div>
			</div>
			<div className="flex items-center gap-2">
				<button
					onClick={() =>
						cartState?.dispatch({ type: "DECREASE_QUANTITY", payload: item })
					}
					className="px-2 py-1 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={item.quantity === 1}
				>
					-
				</button>
				<span>{item.quantity}</span>
				<button
					onClick={() =>
						cartState?.dispatch({ type: "INCREASE_QUANTITY", payload: item })
					}
					className="px-2 py-1 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={item.stock === 0}
				>
					+
				</button>
			</div>
		</div>
	);
}

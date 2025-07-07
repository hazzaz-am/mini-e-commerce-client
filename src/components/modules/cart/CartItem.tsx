import type { TCartItem } from "../../../types";

type CartItemProps = {
	item: TCartItem;
	handleQuantity: (id: number, change: number) => void;
};

export default function CartItem({ item, handleQuantity }: CartItemProps) {
	return (
		<div className="flex justify-between items-center mb-6">
			<div>
				<div className="font-semibold">{item.name}</div>
				<div className="text-gray-500 text-sm">
					${item.price} x {item.quantity}
				</div>
			</div>
			<div className="flex items-center gap-2">
				<button
					onClick={() => handleQuantity(item.id, -1)}
					className="px-2 py-1 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200"
				>
					-
				</button>
				<span>{item.quantity}</span>
				<button
					onClick={() => handleQuantity(item.id, 1)}
					className="px-2 py-1 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200"
				>
					+
				</button>
			</div>
		</div>
	);
}

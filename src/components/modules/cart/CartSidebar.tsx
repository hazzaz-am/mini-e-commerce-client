import { useState } from "react";
import toast from "react-hot-toast";
import { cn } from "../../../lib/utils";
import type { TCartItem, TCheckoutForm } from "../../../types";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import CheckoutModal from "./CheckoutModal";

type CartSidebarProps = {
	cartOpen: boolean;
	setCartOpen: (open: boolean) => void;
	setCart: (cart: TCartItem[]) => void;
	handleQuantity: (id: number, change: number) => void;
	cart: TCartItem[];
	total: number;
};

export default function CartSidebar({
	cartOpen,
	cart,
	total,
	setCartOpen,
	setCart,
	handleQuantity,
}: CartSidebarProps) {
	const [checkoutOpen, setCheckoutOpen] = useState(false);

	const handleCheckout = () => {
		setCheckoutOpen(true);
	};

	const handleOrderSubmit = (data: TCheckoutForm) => {
		const name = data.name.split(" ")[0];
		toast.success(
			`Thank you! ${name}. Your order has been placed successfully!`
		);
		setCartOpen(false);
		setCart([]);
	};

	return (
		<>
			<div
				className={cn(
					"fixed top-0 right-0 h-full w-[350px] max-w-[90vw] bg-white shadow-lg z-50 flex flex-col transition-transform duration-300 ease-in-out",
					cartOpen ? "translate-x-0" : "translate-x-full"
				)}
			>
				<div className="p-5 border-b flex justify-between items-center">
					<h2 className="text-lg font-semibold m-0">Cart</h2>
					<button
						onClick={() => setCartOpen(false)}
						className="text-2xl leading-none focus:outline-none cursor-pointer"
						title="Close Cart"
					>
						&times;
					</button>
				</div>

				<div className="flex-1 overflow-y-auto p-4">
					{cart.length === 0 ? (
						<p className="text-center text-gray-400">Your cart is empty.</p>
					) : (
						cart.map((item) => (
							<CartItem
								key={item.id}
								item={item}
								handleQuantity={handleQuantity}
							/>
						))
					)}
				</div>

				<div className="p-5 border-t font-semibold text-base bg-gray-50">
					<div className="flex justify-between items-center mb-3">
						<span>Total:</span>
						<span>${total}</span>
					</div>
					<Button
						disabled={cart.length === 0}
						title={cart.length === 0 ? "Your cart is empty" : "Checkout"}
						onHandleClick={handleCheckout}
						className="disabled:cursor-not-allowed disabled:bg-gray-400"
					>
						Checkout
					</Button>
				</div>
			</div>

			{checkoutOpen && (
				<CheckoutModal
					open={checkoutOpen}
					onClose={() => setCheckoutOpen(false)}
					onSubmit={handleOrderSubmit}
				/>
			)}
		</>
	);
}

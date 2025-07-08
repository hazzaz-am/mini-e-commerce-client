import { useState } from "react";
import toast from "react-hot-toast";
import useCart from "../../../hooks/useCart";
import { cn } from "../../../lib/utils";
import type { TCartItem, TCheckoutForm } from "../../../types";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import CheckoutModal from "./CheckoutModal";
import { useNavigate } from "react-router";

type CartSidebarProps = {
	cartOpen: boolean;
	setCartOpen: (open: boolean) => void;
	total: number | undefined;
};

export default function CartSidebar({
	cartOpen,
	total,
	setCartOpen,
}: CartSidebarProps) {
	const [checkoutOpen, setCheckoutOpen] = useState(false);
  const navigate = useNavigate()
	const cartState = useCart();
	const state = cartState?.state;

	const handleCheckout = () => {
		setCheckoutOpen(true);
	};

	const handleOrderSubmit = (data: TCheckoutForm, cartItems: TCartItem[]) => {
		const name = data.name.split(" ")[0];
		toast.success(
			`Thank you! ${name}. Your order has been placed successfully!`
		);
		cartState?.dispatch({ type: "GO_TO_CHECKOUT", payload: cartItems });
		setCartOpen(false);
    navigate("/"); 
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
					{state?.cart.length === 0 ? (
						<p className="text-center text-gray-400">Your cart is empty.</p>
					) : (
						state?.cart.map((item) => <CartItem key={item._id} item={item} />)
					)}
				</div>

				<div className="p-5 border-t font-semibold text-base bg-gray-50">
					<div className="flex justify-between items-center mb-3">
						<span>Total:</span>
						<span>{total !== undefined ? total.toFixed(2) : "0.00"}</span>
					</div>
					<Button
						disabled={state?.cart.length === 0}
						title={state?.cart.length === 0 ? "Your cart is empty" : "Checkout"}
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

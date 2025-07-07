import { useState } from "react";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router";
import useCart from "../../hooks/useCart";
import CartSidebar from "../modules/cart/CartSidebar";

export default function Navbar() {
	const [cartOpen, setCartOpen] = useState(false);
	const cartState = useCart();
	const state = cartState?.state;

	const total = state?.cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return (
		<>
			<nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white relative">
				<div>
					<Link to="/" className="text-sm md:text-2xl font-bold">
						<span className="text-blue-400">Mini</span> E-Commerce
					</Link>
				</div>
				<div className="flex items-center gap-6">
					<div className="flex gap-6 items-center">
						<Link
							to="/"
							className="font-semibold hover:text-blue-400 transition-colors"
							title="Home"
						>
							Home
						</Link>
					</div>
					<button
						onClick={() => setCartOpen(true)}
						className="focus:outline-none cursor-pointer flex items-center gap-1"
						title="View Cart"
					>
						Cart
						<IoIosCart className="text-2xl relative" />
						<span className="absolute top-3 right-3 bg-red-600 text-white rounded-full px-2 text-xs">
							{state?.cart.reduce((sum, item) => sum + item.quantity, 0)}
						</span>
					</button>
				</div>
			</nav>

			<CartSidebar
				cartOpen={cartOpen}
				total={total}
				setCartOpen={setCartOpen}
			/>

			{/* Overlay */}
			{cartOpen && (
				<div
					onClick={() => setCartOpen(false)}
					className="fixed inset-0 bg-black/10 bg-opacity-30 z-40"
				/>
			)}
		</>
	);
}

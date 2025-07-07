import { useState } from "react";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router";

import CartSidebar from "../modules/cart/CartSidebar";

// Dummy cart data for demonstration
const initialCart = [
	{ id: 1, name: "Product 1", price: 20, quantity: 2 },
	{ id: 2, name: "Product 2", price: 15, quantity: 1 },
];

export default function Navbar() {
	const [cartOpen, setCartOpen] = useState(false);
	const [cart, setCart] = useState(initialCart);

	const handleQuantity = (id: number, delta: number) => {
		setCart((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + delta) }
					: item
			)
		);
	};

	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
						<IoIosCart className="text-2xl relative"/>
						<span className="absolute top-3 right-3 bg-red-600 text-white rounded-full px-2 text-xs">
							{cart.reduce((sum, item) => sum + item.quantity, 0)}
						</span>
					</button>
				</div>
			</nav>

			<CartSidebar
				cart={cart}
				cartOpen={cartOpen}
				total={total}
				setCart={setCart}
				setCartOpen={setCartOpen}
				handleQuantity={handleQuantity}
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

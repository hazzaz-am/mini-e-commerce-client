import type { TCheckoutForm } from "../../../types";
import CheckoutForm from "./CheckoutForm";

type CheckoutModalProps = {
	open: boolean;
	onClose: () => void;
	onSubmit: (data: TCheckoutForm) => void;
};

export default function CheckoutModal({
	open,
	onClose,
	onSubmit,
}: CheckoutModalProps) {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-40">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
				<button
					className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
					onClick={onClose}
					title="Close"
				>
					&times;
				</button>
				<h2 className="text-xl font-bold mb-6 text-center">Checkout</h2>
				<CheckoutForm onSubmit={onSubmit} onClose={onClose} />
			</div>
		</div>
	);
}

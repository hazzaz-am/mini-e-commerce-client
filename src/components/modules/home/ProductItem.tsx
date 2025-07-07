import toast from "react-hot-toast";
import { Link } from "react-router";
import useCart from "../../../hooks/useCart";
import type { TProduct } from "../../../types";
import Button from "../../ui/Button";

type TProductItemProps = {
	product: TProduct;
};

export default function ProductItem({ product }: TProductItemProps) {
	const cartContext = useCart();

	const handleAddToCart = (data: TProduct) => {
		cartContext?.dispatch({
			type: "ADD_TO_CART",
			payload: data,
		});
		toast.success("Product added to cart");
	};

	return (
		<div className="w-[200px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col border border-gray-100">
			<Link
				to={`/products/${product.id}`}
				className="flex-1 flex flex-col group"
			>
				<div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-t-xl overflow-hidden">
					<img
						src={product.image}
						alt={product.title}
						className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
					/>
				</div>
				<div className="p-4 flex-1 flex flex-col">
					<h2 className="font-semibold text-base mb-2 flex-1 truncate">
						{product.title}
					</h2>
					<div className="text-blue-600 font-bold text-base mb-4">
						${product.price}
					</div>
				</div>
			</Link>
			<div className="px-4 pb-4">
				<Button
					onHandleClick={() => handleAddToCart(product)}
					disabled={product.stock === 0 || product.inCart}
					className="disabled:cursor-not-allowed disabled:bg-gray-400"
					title={
						product.stock === 0
							? "Out of Stock"
							: product.inCart
							? "Already in Cart"
							: "Add to Cart"
					}
				>
					{product.inCart ? "In Cart" : "Add to Cart"}
				</Button>
			</div>
		</div>
	);
}

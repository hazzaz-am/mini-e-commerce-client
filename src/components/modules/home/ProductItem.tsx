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
		<div className="w-[210px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col border border-gray-100 overflow-hidden group relative">
			<Link
				to={`/products/${product._id}`}
				className="flex-1 flex flex-col"
				tabIndex={0}
			>
				<div className="w-full h-44 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden relative">
					<img
						src={product.image}
						alt={product.title}
					className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
					/>
					{product.stock === 0 && (
						<span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
							Out of Stock
						</span>
					)}
				</div>
				<div className="p-4 flex-1 flex flex-col">
					<h2
						className="font-semibold text-base mb-1 flex-1 truncate"
						title={product.title}
					>
						{product.title}
					</h2>
					<div className="flex items-center gap-2 mb-2">
						<span className="text-yellow-400 text-sm">★</span>
						<span className="text-gray-600 text-xs font-medium">
							{product.rating?.rate ?? "-"}
						</span>
						<span className="text-gray-400 text-xs">
							({product.rating?.count ?? 0})
						</span>
					</div>
					<div className="text-blue-600 font-bold text-lg mb-3">
						${product.price}
					</div>
				</div>
			</Link>
			<div className="px-4 pb-4">
				<Button
					onHandleClick={() => handleAddToCart(product)}
					disabled={product.stock === 0 || product.inCart}
					className="disabled:cursor-not-allowed disabled:bg-gray-400 shadow-md hover:shadow-lg text-base"
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

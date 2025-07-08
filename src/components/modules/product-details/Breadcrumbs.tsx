import { Link } from "react-router";

export default function Breadcrumbs({ title }: { title?: string }) {
	return (
		<nav className="max-w-3xl mb-6 mx-auto text-sm text-gray-500 flex items-center gap-2">
			<Link to="/" className="hover:underline hover:text-blue-600">
				Home
			</Link>
			<span className="mx-1">/</span>
			<Link to="/" className="hover:underline hover:text-blue-600">
				Products
			</Link>
			<span className="mx-1">/</span>
			<span
				className="text-gray-700 font-medium truncate max-w-[180px]"
				title={title}
			>
				{title}
			</span>
		</nav>
	);
}

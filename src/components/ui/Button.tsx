import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = {
	className?: string;
	children: ReactNode;
	onHandleClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	className,
	children,
	onHandleClick,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(
				"w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors duration-200 cursor-pointer",
				className
			)}
			onClick={onHandleClick}
			{...props}
		>
			{children}
		</button>
	);
}

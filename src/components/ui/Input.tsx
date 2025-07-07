import type { InputHTMLAttributes } from "react";

type TInputProps = {
	type?: string;
	name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ type = "text", name, ...rest }: TInputProps) {
	return (
		<input
			type={type}
			name={name}
			id={name}
			{...rest}
			className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
		/>
	);
}

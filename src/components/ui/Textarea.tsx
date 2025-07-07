import type { TextareaHTMLAttributes } from "react";

type TextareaProps = {
	name: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ name, ...rest }: TextareaProps) {
	return (
		<textarea
			name={name}
			id={name}
			{...rest}
			className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
		/>
	);
}

export default function Label({ text }: { text: string }) {
	return (
		<label htmlFor={text} className="capitalize block mb-1 font-medium">
			{text}
		</label>
	);
}

import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import type { TCheckoutForm } from "../../../types";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Textarea from "../../ui/Textarea";

type TCheckoutFormProps = {
	onSubmit: (data: TCheckoutForm) => void;
	onClose: () => void;
};

const initialFormState: TCheckoutForm = {
	name: "",
	email: "",
	address: "",
};

export default function CheckoutForm({
	onSubmit,
	onClose,
}: TCheckoutFormProps) {
	const [form, setForm] = useState(initialFormState);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const name = e.target.name;
		const value = e.target.value;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (form.name.trim().length === 0) {
			toast.error("Name is required.");
			return;
		}
		if (form.email.trim().length === 0) {
			toast.error("Email is required.");
			return;
		}
		if (form.address.trim().length === 0) {
			console.log(form);
			toast.error("Address is required.");
			return;
		}
		onSubmit(form);
		onClose();
		setForm(initialFormState);
	};

	const buttonEnabled =
		form.name.trim().length > 0 ||
		form.email.trim().length > 0 ||
		form.address.trim().length > 0;

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<Label text="name" />
				<Input name="name" value={form.name} onChange={handleChange} />
			</div>
			<div>
				<Label text="email" />
				<Input name="email" value={form.email} onChange={handleChange} />
			</div>

			<div>
				<Label text="address" />
				<Textarea
					name="address"
					rows={3}
					value={form.address}
					onChange={handleChange}
				/>
			</div>
			<Button
				type="submit"
				title="Place Order"
				disabled={!buttonEnabled}
				className="disabled:cursor-not-allowed disabled:bg-gray-400"
			>
				Place Order
			</Button>
		</form>
	);
}

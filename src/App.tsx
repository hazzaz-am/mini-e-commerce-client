import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import { Toaster } from "react-hot-toast";

export default function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Toaster />
		</>
	);
}

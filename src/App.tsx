import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";

export default function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}
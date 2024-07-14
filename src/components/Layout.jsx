import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      {/* <h1>Layout</h1> */}
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

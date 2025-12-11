import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 React Router Practice — Insan Taufik, S.Kom., M.Kom.</p>
      </footer>
    </>
  );
}

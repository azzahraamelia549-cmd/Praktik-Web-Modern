import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <h1 className="logo">React Router Demo</h1>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

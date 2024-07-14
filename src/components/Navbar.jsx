import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      {/* <h1>Navbar</h1> */}

      <li>
        <Link to="/">
          <button className="navbutton">Home</button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <button className="navbutton">Contact</button>
        </Link>
      </li>
      <li>
        <Link to="/products">
          <button className="navbutton">Products</button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button className="navbutton">About</button>
        </Link>
      </li>
    </nav>
  );
}

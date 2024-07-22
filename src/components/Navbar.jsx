import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

export function Navbar() {
  let cartCount = useSelector((state) => state.cartCount.value);

  return (
    <nav className="navbar">
      {/* <h2 className="cart-container">Number of items in cart </h1> */}

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
      <Link to="/cart">
        <button className="navbutton">Cart {cartCount}</button>
      </Link>
      <li>
        <Link to="/store">
          <button className="navbutton">Store </button>
        </Link>
      </li>
    </nav>
  );
}

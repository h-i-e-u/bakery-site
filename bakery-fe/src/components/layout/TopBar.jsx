import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useCart } from "../../context/CartContext"; // <-- import your cart context

const TopBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart(); // <-- get cart from context

  // Calculate total quantity
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-10">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <button onClick={toggleMenu} className="btn btn-primary btn-outline">
            <Icon icon="mdi:menu" className="text-2xl" />
          </button>
          <ul
            className={`absolute menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52
                    ${isMenuOpen ? "block" : "hidden"}`}
          >
            <li>
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={toggleMenu}
              >
                <Icon icon="mdi:home" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="flex items-center gap-2"
                onClick={toggleMenu}
              >
                <Icon icon="mdi:store" />
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2"
                onClick={toggleMenu}
              >
                <Icon icon="mdi:information" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start lg:ml-4">
        <h1 className="text-3xl font-bold font-amaranth">UTH Bakery</h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end ml-auto flex items-center justify-end gap-4">
        {/* Search Button implement later */}
        {/* <button className="btn btn-ghost btn-circle">
          <Icon icon="mdi:magnify" className="h-5 w-5" />
        </button> */}

        {/* Cart Button */}
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => navigate("/cart")}
        >
          <div className="indicator">
            <Icon icon="mdi:cart-outline" className="h-5 w-5" />
            <span className="badge badge-sm indicator-item">
              {cartCount}
            </span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default TopBar;

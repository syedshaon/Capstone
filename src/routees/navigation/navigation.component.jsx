import { Routes, Link, Outlet } from "react-router-dom";
import icon from "../../assets/crown.svg";
import "./navigation.style.scss";

export const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src={icon} alt="crown logo" className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

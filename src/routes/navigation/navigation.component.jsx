import { Routes, Link, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import icon from "../../assets/crown.svg";
import "./navigation.style.scss";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../Utilities/firebase/firebase.utils";

export const Navigation = () => {
  // const { setCurrentUser, currentUser } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // const signOutUserFromContext = async () => {
  //   const response = await signOutUser();
  //   setCurrentUser(null);
  // };
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
          {currentUser ? (
            // <Link onClick={signOutUserFromContext} className="nav-link" to="/signin">
            //   Sign Out
            // </Link>
            <Link onClick={signOutUser} className="nav-link" to="/signin">
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};

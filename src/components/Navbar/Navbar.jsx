import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {logout} from '../../store/auth/auth.actions';

const Navbar = () => {
  const isAuthenticated = useSelector(
    (state) => state.auth.data.isAuthenticated
  );
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cart.data.length);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
      navigate("/login");
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">
          Cart : {cartItemCount && `(${cartItemCount})`}{" "}
        </div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuthenticated? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
